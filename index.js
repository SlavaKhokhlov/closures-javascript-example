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

// ----------------------------------------------------

// Function Factories

function makeGreeting(language) {
 
    return function(firstname, lastname) {
     
        if (language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);   
        }

        if (language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);   
        }
        
    }
    
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');