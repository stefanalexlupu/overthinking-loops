const basket = [
  "🍅",
  "🍇",
  "🍈",
  "🍉",
  "🍊",
  "🍋",
  "🍌",
  "🍍",
  "🍎",
  "🍏",
  "🍐",
  "🍑",
  "🍒",
  "🍓",
  "🥝",
  "🥥",
  "🥭"
]

// By default, the generator will create an endless flow of data, that can be
// limited by passing a value as the limit argument.
module.exports.basket = function* basketGenerator(limit = -1) {
  let currentIndex = 0;

  while (limit === -1 || currentIndex < limit) {
    currentIndex++;
    const randomIndex = Math.floor(Math.random() * (basket.length - 1));

    yield basket[randomIndex];
  }
};
