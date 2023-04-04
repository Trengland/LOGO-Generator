const SVG = require("../../svg");
const { Circle, Square, Triangle } = require("./shapes");
const { writeFile } = require("fs/promises");


const inquirer = require("inquirer");
class CLI {
    run() {
        inquirer.prompt([
            {
                name: "text",
                type: "input",
                message: "Please choose the text for your LOGO (no more than 3 characters)",
                validate: (text) =>
                text.length <= 3 ||
                "!No more than 3 characters, please!"
            },
            {
                name: "textColor",
                type: "input",
                message: "Please choose a color for the text portion of your LOGO",
            },
            {
                name: "shape",
                type: "list",
                message: "Please choose one of the following shapes for your LOGO",
                choices: ["circle", "square", "triangle"],
            },
            {
                name: "shapeColor",
                type: "input",
                message: "Please choose the color of your LOGO (shape)",
            },
        ])

        .then(({ text, textColor, shape: shapeType, shapeColor }) => { // Renamed 'shape' to 'shapeType'
            let chosenShape; // Renamed 'shape' to 'chosenShape'
            switch (shapeType) {
                case "circle":
                    chosenShape = new Circle();
                    break;

                case "square":
                    chosenShape = new Square();
                    break;

                default:
                    chosenShape = new Triangle();
                    break;
            }
            chosenShape.setColor(shapeColor);

            const svg = new SVG();
            svg.setText(text, textColor);
            svg.setShape(chosenShape); // Use the renamed variable 'chosenShape'
            return writeFile("logo.svg", svg.render());
        })

        .then(() => {
            console.log("Succesfully Generated New LOGO!");
        })

        .catch((error) => {
            console.log(error);
            console.log("OOPS! Something went wrong, please try again.");
        });
    }
}

const cli = new CLI();
cli.run();
