function setup() {
    createCanvas(600, 1000);
    background(220);
}

function draw() {

    if (mouseIsPressed) {
        fill(0); // Set the fill color to black
        noStroke();
        ellipse(mouseX, mouseY, 10, 10);
    }
}