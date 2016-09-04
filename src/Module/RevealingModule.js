/*
 * In revealing pattern you would simply define all of
 * your functions and variables in the private scope and return an anonymous object at
 * the end of the module along with pointers to both the private variables and functions
 * you wished to reveal as public.
 */
var module = (function {
    var name = 'Bob';

    function getName () {
        return name;
    }

    function setName (newName) {
        name = newName;
    }

    return {
        get: getName,
        set: setName
    };
})();