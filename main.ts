input.onGesture(Gesture.TiltRight, function () {
    Tello.right(50)
})
input.onButtonPressed(Button.A, function () {
    Tello.rotate_cw(90)
})
input.onGesture(Gesture.TiltLeft, function () {
    Tello.left(50)
})
input.onGesture(Gesture.LogoUp, function () {
    Tello.down(20)
})
input.onGesture(Gesture.LogoDown, function () {
    Tello.forward(50)
})
input.onButtonPressed(Button.AB, function () {
    Tello.fly_or_land()
})
input.onButtonPressed(Button.B, function () {
    Tello.rotate_ccw(90)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Tello.up(20)
})
Tello.radiosetgroup(20)
basic.forever(function () {
    Tello.Setorder(1000)
})
