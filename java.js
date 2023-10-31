//Array
let name = 'Uloma';

let names = ['Uloma', 'official', 'frank', 'peter']

names.pop()
names.pop()
names.push(chibuike)

//loop Array
for(let i = 0; i < names. length; i++){
    console.log('the number', (i + 1) + 'person in the class is ' + names[i]);
}

for(let i = 1; i <= 500; i++) {
    console.log(i);
}


names.forEach(function (element) {
    console.log(element);
});

console. log(names.length);



//Object 
let items ={
    name: 'okeke';
    isold: false;
    age:45;
    
};

//function 

// var chuks = 5;

// var a = 1;
// var b = 2;

// function test() {
//     var c = a + b;
//     var chuks = 6;
//     console.log(chuks);
// }
// test();

// var d = a - b;
// console.log(chuks);



// let uloma = 15;

// let uloma = 16;
// let uloma = 17;

// console.log(uloma);



// function test(emeka){
//     let abc = emeka.length;
//     console.log(abc + 4500)
// }
// test("now free for everyone");


// function addNumbers(odd, even){
//     let result = odd + even;
//     console.log(result);
// }
// addNumbers(3, 8);


// function test(uloma, emeka){
//     console.log(uloma + emeka)
// }
// test(2,4);

let numbers = (primary, secondary) => {
    console.log(primary/secondary);
}
numbers(4, 2);
