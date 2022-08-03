"use strict";

let square = $(".square");
let squareNum = 6;
let colors = colorArray(squareNum);
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

mainGame();
function mainGame (){
    $("#rgbCode").text(pickColor);
for (let e = 0; e < square.length; e++ ){
    square[e].style.backgroundColor = colors[e];
    $(square[e]).on('click', function (){
        if (square[e].style.backgroundColor === pickedColor) {
            $(".square").off('click');
            $("#rgbCode").fadeOut("slow").fadeIn("fast").text("That's Correct Dude!");
            $("#gameheader").css({
                backgroundColor: pickedColor
            })
            reset();
        } else {
            $(this).css({
                backgroundColor: "#232323"
            })
        }
    })
}
}


function reset(){
    colors = colorArray(squareNum);
    pickedColor = pickColor();
    $("rgbCode").text(pickedColor);
    $("#gameheader").css({
        backgroundColor: "#232323",
    })
    mainGame();

}