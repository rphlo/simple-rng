const random = require('./index.js');

start = 10
end = 35
floatStart = 1.25
floatEnd = 3.62
array = [1, 2, 3];
probTruth = 0.5 

random.seed('test')
console.log(random.randInt()); // return a random 32bits integer
console.log(random.random()); // return a random float in range [0, 1]
console.log(random.randRange(start, end)); // return a random number in range [start, end): including start, excluding end
console.log(random.randFloatRange(floatStart, floatEnd)); // returns in range [start, end): including start, excluding end
console.log(random.randChoice(array)); // return a random item from array
console.log(random.randBool(probTruth)); // return a random boolean with probTruth probability of being true