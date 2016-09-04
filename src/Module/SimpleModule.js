// Example of simple module patter implementation and use with support of private members

var simpleModule = (function () {
	var counter = 0;

	return {
		incrementCounter: function () {
			return counter++;
		},
		resetCounter: function () {
			console.log('Counter was reset');
			counter = 0;
		}
	};
})();

simpleModule.incrementCounter();
simpleModule.resetCounter();