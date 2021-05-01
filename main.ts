let list2 : number[] = []
function Herzschlag() {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
}

Herzschlag()
if (input.buttonIsPressed(Button.A)) {
    basic.showNumber(0)
}

if (input.pinIsPressed(TouchPin.P0)) {
    basic.showNumber(0)
} else {
    basic.showNumber(0)
}

for (let index = 0; index < 4; index++) {
    basic.showNumber(0)
}
for (let Index = 0; Index < 5; Index++) {
    basic.showNumber(0)
}
for (let Wert of list2) {
    basic.showNumber(0)
}
while (input.buttonIsPressed(Button.A)) {
    basic.showNumber(0)
}
while (input.buttonIsPressed(Button.A)) {
    basic.showNumber(0)
    if (input.buttonIsPressed(Button.B)) {
        break
    }
    
}
