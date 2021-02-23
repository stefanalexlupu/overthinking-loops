const Caterpillar = require('../common/caterpillar.js')

// We can still limit the number of returned values by passing an argument to
// the basket() method
const basket = require('./basket.js').basket(/* 30 */)
const caterpillar = new Caterpillar()

function feed(caterpillar, basket) {
  const { value, done } = basket.next();

  if (!caterpillar.isHungry || done) {
    // this is the end of the call stack, either because the 🐛 ate everythinng
    // (similar to end of `for` loop in previous examples) or it is no longer
    // hungry (similar to the `break` statement)
    return
  }

  if (value !== '🍈') {
    // else, skip this fruit! (similar to `continue` in previous examples)
    caterpillar.eat(value)
  }
  feed(caterpillar, basket)
}

feed(caterpillar, basket)