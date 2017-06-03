var count = (function () {
    var _counter = 0;
    return function () {return _counter += 1;}
})();

count();
count();
count();
// the counter is now 3