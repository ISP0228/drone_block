input.onButtonPressed(Button.A, function () {
    Tello.gomid(
    100,
    100,
    100,
    50,
    1
    )
})
input.onButtonPressed(Button.AB, function () {
    Tello.fly_or_land()
})
input.onButtonPressed(Button.B, function () {
    Tello.curve(
    30,
    0,
    30,
    60,
    0,
    60,
    50
    )
})
Tello.radiosetgroup(31)
basic.forever(function () {
    Tello.Setorder(1000)
})
