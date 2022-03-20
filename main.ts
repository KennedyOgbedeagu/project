input.onButtonPressed(Button.A, function () {
    temp += -1
})
input.onButtonPressed(Button.B, function () {
    temp += 1
})
serial.redirectToUSB()
let Heating = 0
let temp = 21
basic.forever(function () {
    serial.writeLine("" + (input.temperature()))
    if (input.temperature() < 21) {
        Heating += 1
    } else if (input.temperature() == 21) {
        basic.clearScreen()
    } else {
        Heating += -1
    }
    if (Heating < 1) {
        basic.showString("On")
    } else {
        basic.showString("Off")
    }
    basic.pause(2000)
})
