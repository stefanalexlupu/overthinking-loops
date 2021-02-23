const Caterpillar = require('../common/caterpillar.js')
const basket = require('./basket.js').basket()

const caterpillar = new Caterpillar()

while (caterpillar.isHungry) {
  const { value, done } = basket.next()

  // I don't have access to `done` to check it in the loop condition, so I'll
  // check it here:
  if (done) {
    break;
  }

  if (value === '🍈') {
    // 🐛 is picky and doesn't like melon, so we should skip this fruit
    continue
  }
  caterpillar.eat(value);
}