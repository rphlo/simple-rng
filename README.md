# simple-rng
Simple Javascript Random Number Generator that can take a seed.  
Tried to use same methods than the ones available in python random module.

Usage:

```
const random = require('simple-rng');

...


random.randInt(); // return a random 32bits integer
random.random(); // return a random float in range [0, 1]
random.randRange(max); // return a random number in range [0, max): including start, excluding end
random.randFloatRange(max); // returns in range [0, max): including start, excluding end
random.randRange(start, end); // return a random number in range [start, end): including start, excluding end
random.randFloatRange(start, end); // returns in range [start, end): including start, excluding end
random.randChoice(array); // return a random item from array
random.randBool(); // return a random boolean with 0.5 probability of being true
random.randBool(probTruth); // return a random boolean with probTruth probability of being true
random.seed(value); // seed the random generator
```
