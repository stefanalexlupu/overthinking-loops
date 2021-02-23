const Caterpillar = require('../caterpillar.js')
const { basket } = require('./basket.js')

const caterpillar = new Caterpillar()
let i = -1

// instead of using 'break' we can have it in the while condition
while (caterpillar.isHungry && ++i < basket.length) {
  if (basket[i] === '🍈') {
    continue
  }
  caterpillar.eat(basket[i]);
}