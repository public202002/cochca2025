// Check if Pablo is defined
if (typeof Pablo === 'undefined') {
    throw new Error('Pablo.js is not loaded.');
}

// Extend the Pablo.js prototype to add a move method
Pablo.fn.move = function(x, y) {
    return this.attr({
        x: x,
        y: y
    });
};

// Example of usage
document.addEventListener('DOMContentLoaded', function() {
    // Create an SVG container and append it to the body
    var svg = Pablo(document.body).svg({ width: 500, height: 500 });

    // Create a rectangle SVG element
    var rect = svg.rect({
        x: 50,
        y: 50,
        width: 100,
        height: 100,
        fill: 'blue'
    });

    // Move the rectangle to a new position after 2 seconds
    setTimeout(function() {
        rect.move(200, 200);
    }, 2000);
});
