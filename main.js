"use strict";


let squareNum = 9;

function num() {
    if ($('#easyBTN').attr('class') === 'selected'){
            squareNum = 3;
    }
    if ($('#normalBTN').attr('class') === 'selected'){
            squareNum = 6;
    }
    if ($('#hardBTN').attr('class') === 'selected'){
            squareNum = 12;
    }
    return squareNum;
}
num();

$('#easyBTN').on('click', function () {
    $(this).addClass('selected');
    $('#normalBTN').removeClass('selected');
    $('#hardBTN').removeClass('selected');
    $(".square").remove();
    app();
})

$('#normalBTN').on('click', function () {
    $(this).addClass('selected');
    $('#easyBTN').removeClass('selected');
    $('#hardBTN').removeClass('selected');
    $(".square").remove();
    app();
})
$('#hardBTN').on('click', function () {
    $(this).addClass('selected');
    $('#easyBTN').removeClass('selected');
    $('#normalBTN').removeClass('selected');
    $(".square").remove();
    app();
})

$("#reset").on('click', function (){
    $(".square").remove();
    app();
})



function app(){


let count = 0;
while (count < num()) {
    $(".items").append('<div class="square"></div>');
    count++;
} 

let square = $(".square");
let colors = colorArray(num());
let pickedColor = pickColor();

/** creates a random tone for each of the 3 colors */
function randomColors (){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " +green + ", " + blue + ")"
}

/** To save the random color in an array  */
function colorArray(numberSquares){
    let colors = [];
    for (let color = 0; color < numberSquares; color++){
        colors.push(randomColors());
    }
    return colors;
}

/** To pick a random color from the array */
function pickColor(){
    let pickColor = Math.floor(Math.random() * colors.length)
    return colors[pickColor];
}


function mainGame (){
    $("#rgbCode").text(pickColor);
for (let e = 0; e < num(); e++ ){
    square[e].style.backgroundColor = colors[e];
    $(square[e]).on('click', function (){
        if (square[e].style.backgroundColor === pickedColor) {
            $(".square").off('click');
            $("#rgbCode").fadeOut("slow").fadeIn("fast").text("That's Correct Dude!");
            $("#gameheader").css({
                backgroundColor: pickedColor
            })
            timeout();
        } else {
            $(this).css({
                backgroundColor: "#232323"
            })
        }
    })
}
}

function reset(){
    colors = colorArray(num());
    pickedColor = pickColor();
    $("rgbCode").text(pickedColor);
    $("#gameheader").css({
        backgroundColor: "#232323",
    })
    mainGame();
}

function timeout(){
    setTimeout(function (){
        reset();
    }, 3000)
}

mainGame();
} // app closing tag

app();