### [og-for-loop.js](og-for-loop.js)

The original gangster, probably the first one I learnt: the `for` loop. It gives
you full controll on the loop flow, allowing you to break it or skip iterations
using `break` and `continue` respectively.

The fun fact here is that the generator function returns a iterator object,
which can be included in a for-of loop just like that!

### [while-loop.js](while-loop.js)

You get the same degree of controll as for the for loop, but you have to iterate
manually.

### [do-while.js](do-while.js)

Turn the while loop upside down and you get the `do-while` loop.

You should always note that when using this statement, the first iteration
**will** execute, so it would be best to make sure you have everything you need
when entering.

Important when working with iterator objects and do-while loops is to check  the
order in which you call `.next()`, because if you call it twice in a row (like
before entering the loop, and then immediately in the first iteration), you
loose the first value it yields.

You can use `break` and `continue` in a `do-while` loop, but breaking early will
simply do the same check in the loop condition twice. I favour using the
loop condition because you don't step in the next iteration just to find out you
should skip the rest all together, right?

### [recursive.js](recursive.js)

You can totally do this the recursive way if you like, but, it's kinda pointless
and if the basket is large enough, you step into "stack overflow" territory.

### [function.js](function.js)

If you move the loop to a function, you can avoid the `break`ing all together
and return from the function.

### [array-prototype.js](array-prototype.js)

Array prototype methods only work on arrays. That's just common sense, right?

So if you want to use a generator to get an array... you just do this:

```
[...generator()]
```

Remember that the generator function returns an iterator when invoked? You can
acctually use the spread operator to map that to an array.

🛑 Make sure you don't do this with a generator that yields an in(de)finite
amount of values. It's like spreading an in(de)finitely sized array, which
smells like trouble if you ask me!
