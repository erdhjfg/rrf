input.onButtonPressed(Button.A, function () {
    turtle.setBrightness(53)
    turtle.setPosition(2, 2)
    turtle.pen(TurtlePenMode.Down)
    for (let index = 0; index <= 4; index++) {
        turtle.forward(1)
        turtle.turnRight()
    }
    turtle.pen(TurtlePenMode.Up)
    turtle.home()
    basic.showString(" ")
})
