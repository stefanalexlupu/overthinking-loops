function Caterpillar() {
  this.isHungry = true
}
  
Caterpillar.prototype.eat = function eat(fruit) {
  if (!this.isHungry) {
    throw new Error('🐛 ate too much!')
  }

  if(fruit === '🍈') {
    throw new Error('🐛 hates melon! It got a nasty indigestion...')
  }
  console.log(`The caterpilar ate a ${fruit}`)

  this.isHungry = Math.random() < 0.9
  }

module.exports = Caterpillar;
