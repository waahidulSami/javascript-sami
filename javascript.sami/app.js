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