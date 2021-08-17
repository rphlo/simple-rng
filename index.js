(function() {
'use strict';
  hashCode = function() {
    var hash = 0, i, chr, len;
    if (this.length == 0) return hash;
    for (i = 0, len = this.length; i < len; i++) {
      chr   = this.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash | hash);
  };

  function RNG(seed) {
    // LCG using GCC's constants
    if(!(this instanceof RNG)){
      return new RNG(seed);
    }

    var _m = 0x80000000, // 2**31;
        _a = 1103515245,
        _c = 12345,
        _state = seed ? ((seed instanceof String)?seed.hashCode():seed) : Math.floor(Math.random() * (_m-1));

    var randInt = function(){
      _state = (_a * _state + _c) % _m;
      return _state;
    }

    var random = function() {
      // returns in range [0,1]
      return randInt() / (_m - 1);
    }

    var randRange = function(start, end) {
      // returns in range [start, end): including start, excluding end
      if(arguments.length==1){
        end = start;
        start = 0;
      }
      var rangeSize = end - start,
          randomUnder1 = randInt() / _m;
      return parseFloat(start + Math.floor(randomUnder1 * rangeSize));
    }
    
    var randFloatRange = function(start, end) {
      // returns in range [start, end): including start, excluding end
      if(arguments.length==1){
        end = start;
        start = 0;
      }
      var rangeSize = end - start,
          randomUnder1 = randInt() / _m;
      return parseFloat(start + randomUnder1 * rangeSize);
    }

    var randChoice = function(array) {
      return array[randRange(0, array.length)];
    }
    var randBool = function(probTruth){
      return random() < probTruth;
    }
    return {
      random: random,
      randInt: randInt,
      randRange: randRange,
      randFloatRange: randFloatRange,
      randChoice: randChoice,
      randBool: randBool
    }
  }

	// export in common js
	if( typeof module !== "undefined" && ('exports' in module)){
		module.exports = RNG;
	}
})();
