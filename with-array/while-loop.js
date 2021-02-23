const Caterpillar = require('../common/caterpillar.js')
const { basket } = require('./basket.js')

const caterpillar = new Caterpillar()
let i = -1

while (++i < basket.length) {
  if (!caterpillar.isHungry) {
    // no need to go through the rest of them, we can exit the loop right here
    break
  }

  if (basket[i] === '🍈') {
    // 🐛 is picky and doesn't like melon, so we should skip this fruit
    continue
  }
  caterpillar.eat(basket[i]);
}