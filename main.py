list2: List[number] = []
def Herzschlag():
    basic.show_icon(IconNames.HEART)
    basic.pause(100)
    basic.show_icon(IconNames.SMALL_HEART)
    basic.pause(100)
Herzschlag()
if input.button_is_pressed(Button.A):
    basic.show_number(0)
if input.pin_is_pressed(TouchPin.P0):
    basic.show_number(0)
else:
    basic.show_number(0)
for index in range(4):
    basic.show_number(0)
for Index in range(5):
    basic.show_number(0)
for Wert in list2:
    basic.show_number(0)
while input.button_is_pressed(Button.A):
    basic.show_number(0)
while input.button_is_pressed(Button.A):
    basic.show_number(0)
    if input.button_is_pressed(Button.B):
        break