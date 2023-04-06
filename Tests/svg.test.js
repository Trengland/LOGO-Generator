const { Circle, Square, Triangle } = require('../Main/lib/shapes');

describe('Shape classes', () => {
  describe('Circle', () => {
    test('render returns valid SVG circle', () => {
      const circle = new Circle();
      circle.setColor('red');
      expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });
  });

  describe('Square', () => {
    test('render returns valid SVG rectangle', () => {
      const square = new Square();
      square.setColor('blue');
      expect(square.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue" />');
    });
  });

  describe('Triangle', () => {
    test('render returns valid SVG polygon', () => {
      const triangle = new Triangle();
      triangle.setColor('green');
      expect(triangle.render()).toEqual('<polygon points="150, 18, 244, 182, 56, 182" fill="green" />');
    });
  });
});
