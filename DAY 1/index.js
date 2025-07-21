// DATATYPES

// String
// Number
// boolean
// undefined
// null

//1. string
// doublecode
console.log("hello", typeof "hello");
console.log("1", typeof "1");
console.log("true", typeof "true");
console.log("hrhgf@hf1234", typeof "hrhgf@hf1234");

// singlecode
console.log('sayali', typeof 'sayali');
console.log('false', typeof 'false');
console.log('bhg354@hjdg', typeof 'bhg354@hjdg');

// backtiks
console.log(`hellow`, typeof `hellow`);
console.log(`12`, typeof `12`);

// 2.Number
console.log(12, typeof 12);
console.log(15, typeof 15);

// // 3.boolean
console.log(true, typeof true);
console.log(false, typeof false);

// mathematicalexpression
console.log(1 + 1 + 3 - 2);

// variable=usecase to store data

// var 
// let
// const

// 1 variable

var userage = 25

var username = "sayali";

var isusercheck = true;
console.log(userage, username, isusercheck);

// 2 type

var counter = 1;
console.log(counter);//decleare assine
counter = 2;
console.log(counter); //re-assine

var counter = 3; //re-decleare

console.log(counter);

// 3 type addition
// increment oprator

counter1 = 10;
counter2 = 20;
var result = counter1 + counter2
console.log(result)

// 4types

counter = 1;
counter = counter + 1
console.log(counter)

// 5type
counter = 1;
counter++
console.log(counter)

// 6type

counter = 4;
counter += 1;
console.log(counter)

// 7type
counter = 1;
console.log(counter);

var counter; //hoisting

// 2 let

let age = 10;
console.log(age);

age = 11;
console.log(age);


// 3 const

const num = 10;
console.log(num);

// scope
var value = 20;
{
    console.log(value);
}

// opposite
{
    var value = 10;
}
console.log(value);

// block
{
    var value = 10;
    console.log(value);
}

{
    const value = 20;
    {
        
        {
            console.log(value);
        }
        console.log(value);
    }
    console.log(value);
}

let userdata =null;




//                     var     let     const
//     re-assign       true    true    false
//    re-decleare      true    false   false
//     hosting         true    false   false
//     scope           global   block   block
