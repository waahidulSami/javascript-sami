// function myfuncation (){
//     console.log("welcome my home ");
//     console.log("we are a good boy ");
    
// }
// myfuncation() 
// paremeter agrument 
function myfuncation (msg){  //(perameter)
    console.log(msg);
}
myfuncation(`my name is sami`)  //agrument 

// funcation 2number 

function sumr(a,b){
    console.log(a+b);
}

sumr(10,21)
//
function sum(a,b){
    s = a - b;
    return s;
}
let valu = sum(10,21);
console.log(valu);



// arrow function 

 const arwsum= (x , y)=>{
        console.log(x +y );
    }

// multiplay funcation 


const aroowmul = (a,b)=>{
    console.log(a*b);
}
const print =()=>{
    console.log('hello');
}

//

//question 1
function countvowel(sami){
    let count =0;
    for(const rumi of sami){
        if(
            rumi === "a"||
              rumi === "i"
        ){
            count++;
        }
    }
    console.log(count);
}
//question 2 (arrow function )
const countvow =(sami)=>{
    let count = 0;
    for(const ami of sami){
        if(
            ami === "a"||
              ami === "i"
        ){
    count++
        }
    }
return count;
}



//
let array = ['sami' ,'rumi'];

array.forEach((val,idx,array) => {
    console.log(val.toUpperCase() ,idx,array);
});

// question 
let array1 = [2,4,6,8,10];

array1.forEach((num) => {
    console.log(num * num);
})

let calc = [10,20,30,40,50];
let calucet = (num) => {
    console.log(num * num);
}
calc.forEach(calucet);
//map
let nums =[ 50,70,100]

let newarr=nums.map((val) => {
return val  + 2;

})
console.log(newarr);
//filter 
let num =[ 2,3,4,5,6,7,8,9,10,11,12]

let evenarr=num.filter((val) => {
return val > 10;

})
console.log(evenarr);


//reduce 
let arr = [1,2,3,4,5]

const output =arr.reduce((sa,mi)=>{
return sa +mi ;
})
console.log(output);