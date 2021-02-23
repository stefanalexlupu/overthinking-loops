const Caterpillar = require('../common/caterpillar.js')
const basket = require('./basket.js').basket()

const caterpillar = new Caterpillar()
let value, done;

do {
  // Alternative placement for working with a break statement - would use this
  // if there was a chance for the catterpillar to be full to begin with:
  // |-------------------------------|
  // | if (!caterpillar.isHungry) {  |
  // |  break;                       |
  // | }                             |
  // |-------------------------------|

  // This statement needs to happen before hitting the continue statement,
  // since it is the condition altering statement. Otherwise, we end up with an
  // infinite loop.
  ({ value, done } = basket.next())

  // We have to check for done, because if the basket generator was initialized
  // with 0, it will yield { value: undefined, done: true } the first time we
  // call basket.next()
  if (done || value === '🍈') {
    continue
  }
  caterpillar.eat(value);
}
// Place the break condition in the while() condition in order to avoid entering
// the next iteration of the loop.
while (caterpillar.isHungry && !done)
