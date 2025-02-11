// for loop 
let car =['bmw', 'toyta','volvo', 'ford' ,'tesla', 'lambo'];

car.push('mg ')

for(let i = 0; i < car.length  ; i++){
    console.log(car[i]);
}

//for in loop
 let person =
{
    name :'sami',
    age  : 18,
    country : 'bangaladesh' ,
    job : 'web developer'
}
for (let i in person){
    let cap = i.charAt(0).toUpperCase()+i.slice(1) // capletter
    console.log(person[i]); 
    console.log( cap +':' + person[i]); // space and (name ,age and country )show 

} 
// for each loop 
let cars =['sami','rumi', 'ami','tumi', 'sobai']

// cars.forEach(function (s){
//     console.log(s);
// });

//for of  loop 
for(let  i of cars){
    console.log(i);
}

//while loop
let num = 0;
while (num < 12){
console.log(num);
num++
}