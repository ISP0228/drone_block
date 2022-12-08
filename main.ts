input.onButtonPressed(Button.A, function on_button_pressed_a() {
    Tello.gomid(100, 100, 100, 50, 1)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    Tello.fly_or_land()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    Tello.curve(30, 0, 30, 60, 0, 60, 50)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    radio.sendString("ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい")
})
Tello.radiosetgroup(31)
basic.forever(function on_forever() {
    Tello.Setorder(1000)
})
