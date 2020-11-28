const Caterpillar = require('./caterpillar.js')
const { basket } = require('./basket.js')

const caterpillar = new Caterpillar()

Array.prototype.loop = function loop(callback) {
  for (let i = 0; i <= this.length; i++) {
    const item = this[i]
    
    if (callback(item, i, this) === false) {
      break
    }
    // notice that the logic portion of the for loop is externalized to the
    // callback function definition, so in the body of that function the
    // we can choose to skip the item by returning instead of using 'continue'
    // at any point.
  }
}

basket.loop(function loopFunction(fruit, index, array) {
  if (!caterpillar.isHungry) {
    return false // the condition for breaking
  }

  if (fruit === '🍈') {
    // we are in a function so we can't 'continue', but we can skip the
    // execution of the rest of the function block for the current fruit by
    // returning here
    return
  }
  caterpillar.eat(fruit)
})
