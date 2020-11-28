const Caterpillar = require('./caterpillar.js')
const { basket } = require('./basket.js')

const caterpillar = new Caterpillar()

// Similar to the example 6-array-prototype.js, we can use an already defined
// array prototype function to obtain the same result. It was not intended for
// this and it will look like 💩 if you use it, especially if anybody will
// review your code - but hey, it works 😎.
basket.some(function loopFunction(item, index, array) {
  if (!caterpillar.isHungry) {
    return true // the condition for breaking
  }

  if (item === '🍈') {
    // we are in a function so we can't 'continue', but we can skip the
    // execution of the rest of the functionn block for the curent item by
    // returning here
    return
  }
  caterpillar.eat(item)
})

// Please don't ever do this in production code, it's silly.
