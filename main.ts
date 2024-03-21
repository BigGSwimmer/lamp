input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 20; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . # . # .
    . # . # .
    . . . . .
    `)
basic.showLeds(`
    . # . # .
    . # . # .
    . # . # .
    . # . # .
    . # . # .
    `)
basic.showLeds(`
    # . . . #
    # . . . #
    # . . . #
    # . . . #
    # . . . #
    `)
music.play(music.tonePlayable(208, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
basic.showLeds(`
    # . . . #
    # . . . #
    # . . . #
    # . . . #
    # . . . #
    `)
basic.showLeds(`
    . # . # .
    . # . # .
    . # . # .
    . # . # .
    . # . # .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . # . # .
    . # . # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.clearScreen()
