# simple-rng
Simple Javascript RNG that can take a seed.

Usage:

```
const random = require('simple-rng');

...

random.randInt(); // return a random 32bits integer
random.random(); // return a random float in range [0, 1]
random.randRange(start, end); // return a random number in range [start, end): including start, excluding end
random.randFloatRange(floatStart, floatEnd); // returns in range [start, end): including start, excluding end
random.randChoice(array); // return a random item from array
random.randBool(probTruth); // return a random boolean with probTruth probability of being true
```
