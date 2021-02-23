const Caterpillar = require('../common/caterpillar.js')
const { basket } = require('./basket.js')

const caterpillar = new Caterpillar()

const REASON = 'break the loop'

// There is no way to stop or break a forEach() loop other than by throwing an
// exception. If you need such behavior, the forEach() method is the wrong tool.
// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// This is an example of that, but as they also say, it's not the right tool for
// obtaining this behaviour. You need to throw an exception to get the expected
// result, which is not good practice
try {
  basket.forEach(function loopFunction(item, index, array) {
    if (!caterpillar.isHungry) {
      throw new Error(REASON) // the condition for breaking
    }
  
    if (item === '🍈') {
      // we are in a function so we can't 'continue', but we can skip the
      // execution of the rest of the functionn block for the curent item by
      // returning here
      return
    }
    caterpillar.eat(item)
  })
} catch (error) {
  if (error.message !== REASON) {
    // there was a reason other than breaking the loop for throwing the error
    throw error;
  }
}

// Please don't ever do this in production code, it's silly.
