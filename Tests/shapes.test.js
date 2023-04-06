const { Circle, Square, Triangle } = require('../Main/lib/shapes');

describe('Shape classes', () => {
  let circle, square, triangle;

  beforeEach(() => {
    circle = new Circle();
    square = new Square();
    triangle = new Triangle();
  });

  describe('setColor', () => {
    test('sets the color of the shape', () => {
      circle.setColor('red');
      expect(circle.color).toEqual('red');
    });
  });

  describe('Circle', () => {
    test('renders a circle with the specified color', () => {
      circle.setColor('green');
      expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
    });
  });

  describe('Square', () => {
    test('renders a square with the specified color', () => {
      square.setColor('blue');
      expect(square.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue" />');
    });
  });

  describe('Triangle', () => {
    test('renders a triangle with the specified color', () => {
      triangle.setColor('yellow');
      expect(triangle.render()).toEqual('<polygon points="150, 18, 244, 182, 56, 182" fill="yellow" />');
    });
  });
});
