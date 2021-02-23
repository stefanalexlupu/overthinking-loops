const Caterpillar = require('../common/caterpillar.js')
const { basket } = require('./basket.js')

const caterpillar = new Caterpillar()

function feed(caterpillar, basket, index) {
  if (!caterpillar.isHungry || index >= basket.length) {
    // this is the end of the call stack, either because the 🐛 ate everythinng
    // (similar to end of `for` loop in previous examples) or it is no longer
    // hungry (similar to the `break` statement)
    return
  }

  if (basket[index] !== '🍈') {
    // else, skip this fruit! (similar to `continue` in previous examples)
    caterpillar.eat(basket[index])
  }
  feed(caterpillar, basket, ++index)
}

feed(caterpillar, basket, 0)
