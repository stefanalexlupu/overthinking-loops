const Caterpillar = require('../common/caterpillar.js')
const { basket } = require('./basket.js')

const caterpillar = new Caterpillar()

for (fruit of basket) {
  if (!caterpillar.isHungry) {
    // no need to go through the rest of them, we can exit the loop right here
    break
  }

  if (fruit === '🍈') {
    // 🐛 is picky and doesn't like melon, so we should skip this fruit
    continue
  }
  caterpillar.eat(fruit);
}
