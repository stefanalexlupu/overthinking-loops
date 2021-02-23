const Caterpillar = require('../common/caterpillar.js')
const { basket } = require('./basket.js')

const caterpillar = new Caterpillar()
let i = 0;

// We have to make this check here, before entering the loop, because the first
// iteration of the do-while loop is always executed.
if (basket.length <= i) {
  return;
}

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
  const fruit = basket[i];

  if (fruit === '🍈') {
    continue
  }
  caterpillar.eat(fruit);
}
// Place the break condition in the while() condition in order to avoid entering
// the next iteration of the loop.
while (caterpillar.isHungry && ++i < basket.length)
