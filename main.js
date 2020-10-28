canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_height = 70;
car1_width = 120;
car1_x = 10;
car1_y = 10;
car1_image = "car1.png";

car2_height = 70;
car2_width = 120;
car2 = "car2.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src = car1_image;
}


function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadCar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}


window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '37') {
        console.log("Left");
        Left();
    }

    if (keyPressed == '38') {
        console.log("Up");
        Up();
    }

    if (keyPressed == '39') {
        console.log("Right");
        Right();
    }

    if (keyPressed == '40') {
        console.log("Down");
        Down();
    }

    if (keyPressed == '68') {
        console.log("w(Up)");
        W();
    }

    if (keyPressed == '83') {
        console.log("a(Left)");
        A();
    }

    if (keyPressed == '65') {
        console.log("s(Down)");
        S();
    }

    if (keyPressed == '87') {
        console.log("d(Right)");
        D();
    }
}


function Up() {
    if (car1_y >= 0) {

        car1_y = car1_y - 10;
        console.log("x = " + car1_x + " y = " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();

    }

}

function Down() {
    if (car1_y <= 500) {

        car1_y = car1_y + 10;
        console.log("x = " + car1_x + " y = " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();

    }

}

function Left() {
    if (car1_x >= 0) {

        car1_x = car1_x - 10;
        console.log("x = " + car1_x + " y = " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();

    }
}

function Right() {
    if (car1_x <= 700) {

        car1_x = car1_x + 10;
        console.log("x = " + car1_x + " y = " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();

    }

}

function W() {
    if (car2_y >= 0) {

        car2_y = car2_y - 10;
        console.log("x = " + car2_x + " y = " + car2_y);
        uploadBackground();
        uploadCar2();
        uploadCar1();

    }

}

function S() {
    if (car2_y <= 500) {

        car2_y = car2_y + 10;
        console.log("x = " + car2_x + " y = " + car2_y);
        uploadBackground();
        uploadCar2();
        uploadCar1();

    }

}

function A() {
    if (car2_x >= 0) {

        car2_x = car2_x - 10;
        console.log("x = " + car2_x + " y = " + car2_y);
        uploadBackground();
        uploadCar2();
        uploadCar1();

    }
}

function D() {
    if (car2_x <= 700) {

        car2_x = car2_x + 10;
        console.log("x = " + car2_x + " y = " + car2_y);
        uploadBackground();
        uploadCar2();
        uploadCar1();

    }

}

if (car1_x > 700) {
    console.log("Car1 Won!!!")
    document.getElementById("game_status").innerHTML = "Car 1 won!!!";
}

if (car2_x > 700) {
    console.log("Car2 Won!!!")
    document.getElementById("game_status").innerHTML = "Car 2 won!!!";
}