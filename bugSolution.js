function foo(a,b){    if (a === 1) {        return a+b;    } else {        return a-b;    }}console.log(foo(1,2)); //outputs 3console.log(foo(2,1)); //outputs 1console.log(foo('1',2)); //outputs 3 (Incorrect with loose comparison, correct with strict comparison) 