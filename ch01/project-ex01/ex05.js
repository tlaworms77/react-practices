// 5. arrow function


const blahblah = function(x){
    return x * x;
}

let a = [1, 2, 3, 4, 5];

a.forEach(function(element){
    process.stdout.write(`${element} : ${blahblah(element)}\t`, '');
});
console.log('\n---');

// ex1
a.forEach(function(e) {
    process.stdout.write(`${e} : ${(x => x * x)(e)}\t`, '');
});
console.log('\n---');

// ex2
a.forEach(e => process.stdout.write(`${e} : ${(x => x * x)(e)}\t`, ''));
console.log('\n---');

// ex3 - 여러행 함수
[5, 3, 15, 1045, 43, 80].forEach(e => {
    if(e % 5 === 0){
        process.stdout.write(`${e}\t`, '');
    }
});
console.log('\n---');

// ex4 - Lexical Bindingn for this Keyword
const dooly = {
    name: '둘리',
    friends: ['또치', '마이콜', '도우너', '희동이', '길동', '영희', '철수', '공실이'],
    printFriends: function(){
        this.friends.forEach(freind => {
            console.log(`${this.name}의 친구 ${freind}`, '');
        })
    }
}

dooly.printFriends();