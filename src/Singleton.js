/*
 * The singleton pattern is thus known because traditionally, it restricts instantiation of a class to a single object. 
 * With JavaScript, singletons serve as a namespace provider which isolate implementation code from the global namespace so-as
 * to provide a single point of access for functions.
 *
 * The singleton doesn't provide a way for code that doesn't know about a previous reference to the singleton to 
 * easily retrieve it - it is not the object or 'class' that's returned by a singleton, it's a structure. 
 */

 // In its simplest form, a singleton in JS can be an object literal grouped together with its related methods and properties

 var singleton1 = {
 	prop1: 'foo',
 	prop2: 'bar',

 	method1: function () {
 		console.log('bas');
 	}
 };

 /* Singleton with private and public methods. 
  * NOTE: seems more like builder to me since every time it's called it would be differen object with the same data.
  */

 var SingletonBuilder = function () {
 	var privateVar = 'foo';

 	function privateMethod () {
 		console.log(privateVar);
 	}

 	return {
 		publicVar: 'bar',

 		publicMethod: function () {
 			privateMethod();
 		},
 	};
 };

 var singleton2 = singletonBuilder();
 singleton2.publicMethod();
 console.log(singleton2.publicVar);

// Singleton that can be instantiated only once and only if needed.

var Singleton = (function () {
	var instantiated;

	function init () {
		return {
			publicVar: 'bar',

			publicMethod: function () {
				console.log('foo');
			}
		};
	}

	return {
		getInstance: function () {
			if (!instantiated) {
				instantiated = init();
			}

			return instantiated;
		}
	};
})();

var singleton3 = Singleton.getInstance();
singleton3.publicMethod();

// Singleton pattern is quite useful when exactly one object is needed to coordinate patterns across the system.

var SingletonTester = (function () {
	function Singleton (options) {
		options = options || {};

		this.name = 'SingletonInstance';
		this.pointX = options.pointX || 6;
		this.pointY = options.pointY || 10;
	}

	var instance;

	var _static = {
		name: 'SingletonTester',

		getInstance: function (options) {
			if (instance === undefined) {
				instance = new Singleton(options);
			}

			return instance;
		}
	};

	return _static;
})();

var singletonTest = SingletonTester.getInstance({
	pointX: 5,
	name: 'test'
});

console.log(singletonTest.name, '.pointX = ', singletonTest.pointX);
