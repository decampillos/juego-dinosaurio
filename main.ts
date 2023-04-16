input.onButtonPressed(Button.A, function () {
    cabeza.change(LedSpriteProperty.Y, -1)
    pies.change(LedSpriteProperty.Y, -1)
    basic.pause(500)
    cabeza.change(LedSpriteProperty.Y, 1)
    pies.change(LedSpriteProperty.Y, 1)
})
function PIEDRAS () {
    piedra = game.createSprite(4, 4)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        piedra.change(LedSpriteProperty.X, -1)
        if (piedra.isTouching(pies)) {
            basic.showIcon(IconNames.No)
            basic.clearScreen()
        }
    }
}
let piedra: game.LedSprite = null
let cabeza: game.LedSprite = null
let pies: game.LedSprite = null
pies = game.createSprite(0, 4)
cabeza = game.createSprite(0, 3)
PIEDRAS()
basic.forever(function () {
    if (piedra.isTouchingEdge()) {
        basic.pause(1000)
        piedra.delete()
        PIEDRAS()
    }
})
