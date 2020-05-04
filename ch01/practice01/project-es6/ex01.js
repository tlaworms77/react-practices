/*
 * 1. let
 */

// ex1. let variable be in block scope
try {
    if(true){
        var i = 10;
        let j = 10;
    }
    console.log(i, j);
} catch(e) {
    console.log(e);
}

// ex2. var lets variable in function scope
try {
    var f = function() {
        var m = 10;
    }

    f();
    console.log(m);
} catch(e) {
    console.log(e);
}



