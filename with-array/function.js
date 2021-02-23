const Caterpillar = require('../common/caterpillar.js')
const { basket } = require('./basket.js')

const caterpillar = new Caterpillar()

function loopFunction () {
  for (fruit of basket) {
    if (!caterpillar.isHungry) {
      // instead of using `break`, we return here
      return
    }
  
    if (fruit === '🍈') {
      // 🐛 is picky and doesn't like melon
      continue
    }
    caterpillar.eat(fruit)
  }
}

loopFunction()