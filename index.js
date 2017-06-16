var count = (function () {
    var _counter = 0;
    return function () {return _counter += 1;}
})();

count();
count();
count();
// the counter is now 3

// ----------------------------------------------

function greet(whattosay) {

	return function(name) {
		console.log(whattosay + ' ' + name);
	}
	
}

//greet('Hi')('Slava');

var sayHi = greet('Hi');
sayHi('Slava');

//----------------------------------------------------

function buildFunctions2() {
 
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);   
                }
            }(i))
        )
        
    }
    
    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();