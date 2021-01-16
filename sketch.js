var bg, textbg;
var box1, box2;
function preload() {
    bg = loadImage("bgg.png");

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    box1 = createSprite(width/1.9, height/1.8, 800, 120);
    box1.shapeColor = "yellow";

    box2 = createSprite(width/2, height/3, 1640, 10);
    box2.shapeColor = "white";

}


function draw() {
    background(bg);
    drawSprites();
    fill("yellow");
    stroke("black");
    strokeWeight(10);
    textSize(100);
    text("Iam Here To Show You Correct Time", width/14, height/4);
    push();
    fill("white");
    stroke("red");
    strokeWeight(6);
    textSize(50);
    text("H0URS", width/3, height/1.34);
    text("MINUTES", width/2.2, height/1.34);
    text("SECONDS", width/1.64, height/1.34);

    // text("Made by - Tanmay ", 1530, 880);
    // text("MINUTES", 860, 240);
    // text("SECONDS", 1140, 240);

    pop();
    // textSize(650);
    // fill("red");
    // text("}",1400,610);
    // text("{",400,610);

    Time();
}
function Time() {
    d = new Date();
    h = d.getHours();
    t = d.getMinutes();
    s = d.getSeconds();
    dd = d.getFullYear();
    fill("white");
    textSize(100);
    stroke("red");
    strokeWeight(10);
    text(h + "   :   " + t + "   :   " + s, width/3, height/1.7);
    push();
    fill("red");
    textSize(100);
    stroke("white");
    text(dd,width/2.2,height/1.1);
    pop();

    // console.log(d);
}
