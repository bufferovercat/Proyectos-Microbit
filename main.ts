input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    255
    )
})
