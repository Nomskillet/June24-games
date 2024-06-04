

//board
let blockSize = 25
let rows = 20
let cols = 20
let board 
let context


//snake head
let snakeX = blockSize * 5
let snakeY = blockSize * 5

let velocityX = 0
let VelocityY = 0

//food
let foodX 
let foodY 



window.onload = function() {
    board = document.getElementById("board")
    board.height = rows * blockSize
    board.width = cols * blockSize
    context = board.getContext("2d") //used nfor drawing on the board

    placeFood()
    document.addEventListener("keyup", changeDirection)
    // update()
    setInterval(update, 1000/10)
}

function update() {
    context.fillStyle="black"
    context.fillRect(0, 0, board.width, board.height)

    context.fillStyle="lime"
    snakeX += velocityX
    snakeY += VelocityY
    context.fillRect(snakeX, snakeY, blockSize, blockSize)

    context.fillStyle="Red"
    context.fillRect(foodX, foodY, blockSize, blockSize)
}

function changeDirection(e){
    if (e.code == "ArrowUp") {
        velocityX = 0
        VelocityY = -1
    }
    else if (e.code == "ArrowDown") {
        velocityX = 0
        VelocityY = 1
    }
    else if (e.code == "ArrowLeft") {
        velocityX = -1
        VelocityY =  0
    }
    else if (e.code == "ArrowRight") {
        velocityX = 1
        VelocityY = 0
    }
}


function placeFood() {
    foodX = Math.floor(Math.random() * cols) * blockSize
    foodY = Math.floor(Math.random() * rows) * blockSize
}