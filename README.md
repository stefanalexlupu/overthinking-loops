# Overthinking Loops

There's just so many ways to do loops. `for` loops, `while` loops, `recursive`
function calls, and a plethora of `Array.prototype` functions.

In this repo you will find examples of overthinking a stupid simple problem.
If you don't learn anything, at least have some fun!

## Problem statement

There's a verry hungry caterpillar 🐛 sitting in a basket of fruits. As any
other caterpillar would do, he starts eating them.

At some point, he will get full and if attempting to eat more, he will die
(throw an error).

You have to feed the caterpillar fruits from the basket, and make sure not to
let him eat to much!

PS: The caterpillar is picky and doesn't like 🍈.

## Solutions

### [og-for-loop.js](og-for-loop.js)

The original gangster, probably the first one I learnt: the `for` loop. It gives
you full controll on the loop flow, allowing you to break it or skip iterations
using `break` and `continue` respectively.

### [while-loop.js](while-loop.js)

You get the same degree of controll as for the for loop, but you have to
keep that counter by yourself.

### [while-loop-but-shorter.js](while-loop-but-shorter.js)

If you like to keep the code shorter, here's an alternative to the previous
version.

### [recursive.js](recursive.js)

You can totally do this the recursive way if you like, but, it's kinda pointless
and if the basket is large enough, you step into "stack overflow" territory.

### [function.js](recursive.js)

If you move the loop to a function, you can avoid the `break`ing all together
and return from the function.

### [foreach.js](foreach.js)

You probably already thought about this

> "what about `Array.prototype.forEach()`?"

Well, you can't break out of these, or at least not in a clean and intuitive
way. Here's an extract from [the MDN entry on `forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach):

> There is no way to stop or break a `forEach()` loop other than by throwing an
> exception. If you need such behavior, the `forEach()` method is the wrong tool.

This file is an example of achieving this, but it's not by any means acceptable
and should **not** be used in production code - _in my oppinion, that is_.

### [array-prototype.js](array-prototype.js)

Well, you can't break out of these. But we could totally try and make an
implementation of a `loop` on Array.prototype which we can controll by
some convention.

### [just-don't.js](just-dont.js)

This is one of those examples, where just because you can, it doesn't mean you
should.

But just for the sake of it, you could do basically the same as in the previous
example by using the `Array.prototype.some` method.

But don't do this in a serious project, it's confusing. It's not what `some` is
meant to do!

------

*Inspired from reading the story of [the very hungry caterpillar](https://www.youtube.com/watch?v=75NQK-Sm1YY)
from Eric Carle with my toddler.*