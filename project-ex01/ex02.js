// 2. const는 블록 범위의 상수를 정의할 때 사용한다.

// ex1. Block Scope
try {
    if(true){
        const C = 10;
    }
    console.log(C);
} catch(e) {
    console.log(e);
}

// ex2. Assignment Error
try {
    const C = 10;
    C = 20;
} catch(e) {
    console.log(e);
}