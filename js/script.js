/*let boderLenght = +prompt('Введите длину сорроны');

 
alert(boderLenght**2)*/


/*const mile = 0.621371;
let km = +prompt('Ведите км ');
alert(`mile:${km*mile}`)*/

/*let numberOne = +prompt('ВВедите число 1');
let numberTwo = +prompt('ВВедите число 2');
alert(`${numberOne+numberTwo}`);
alert(`${numberOne-numberTwo}`);
alert(`${numberOne*numberTwo}`);
alert(`${numberOne/numberTwo}`);*/
/*
let numberOne = +prompt('Введите число 1');
let numberTwo = +prompt('Введите число 2');
alert(`${-numberTwo/numberTwo}`);*/

 /*let hours = +prompt(`Введиите часы`);
 let minutes = +prompt(`ВВедите минуты`);
if (hour === 24) {
alert(`Новый день`)
} else if (hours === 0 && minutes === 0){
   alert(`До следующего дня 24 часа`) 
}
alert(`${23-hours} часа - ${60-minutes} минут`);*/
/*
let number = +prompt(`Введите трехзначное число`);
alert(`${(Math.floor((number % 100)/10))}`);*/

//--------------------------классные задания 09.08.2021
/*
let num = +prompt('jhfjf');надо ввести 5 чисел  вывести х с конца
let i=5;//итерации должно быть 5 раз 
while(i!=1){//

 alert(i--); 
}*/
//--------------- tabl umnozheniya na 3
/*let multipl = 3;множитель

let result = 0; запсывает сюда результат
let i = 1; цфра которую умножают
while (i<10) {
   result = i*multipl;
   i++;
  
  document.write(result);
}
*/
//-----------------------------------------for
/*for(i=0; i<5; i++)=>
let i=0;
while(i<5){
   i++;
}*/
 //---------------------------------------------------------
 //let num = +prompt(' ');//ввести делитель
/* for(i=1;i<=100;i++){// 
if (i%num==0){
   document.write(i); 
}
 }*/
 // или через while
/* let i=1;
 while(i<=100){
   if (i%num==0){
      document.write(i);
 }
 i++;
}*/ 
//------------------------------vivesti kazhdoe 4 chislo iz diapozona
/*let num1 = +prompt('min ');//1
let num2 = +prompt('max ');//10
let a; //menshee
let b;// bolshee
count = 1;//peremennaya schetchika
if (num1>num2){//определение какое из чисел меньшее(диапозон)
   b =num1;
   a =num2;
} else{
   b= num2;
   a= num1;
} 
for(a;a<b;a++){// vedenie kazdogo 4go chisla
   if(count%4===0){
      document.write(a);
   }
   count++;
}
*/
/*
let num = +prompt('chislo');
let prostoe = true;
for(let i=2;i<num;i++){
if (num%i ===0){
   prostoe=false;
  
   break;
};
}
prostoe? alert('prostoe')('neprostoe')
*/



//----------------------------------------------12/08/2021
// ---------------------------------------Практическое задание № 4
//---------------------------------------Задача №1
/*
function calculator(num1,num2){
  // let result = Math.min(num1,num2);
  //return result//или
  return Math.min(num1,num2);
}
console.log(calculator(5,7)); //передавать данне через имя функции
*/
//---------------------------------------Задача №2
/*
function calculator(num1,stepen){
   // let result = Math.pow(num1,num2);
   //return result//или
   return Math.pow(num1,stepen);
}
   console.log(calculator(5,7));
   */
  //---------------------------------------Задача №3 // zapolnit pozhe
  /*
  function calculator(num1,num2, znak){
   switch (znak){

   }
}
   console.log(calculator(5,7,'+'));
   */

   //---------------------------------------Задача №4
  /*
     function calculator(num){
      for(let i=2;i<num;i++){
       
       if(num%i===0){
            return true;
       };
      } return false;
   }    
   console.log(calculator(6));
  */
//---------------------------------------Задача №5 таблица умножения
/*
function calculator(num1){
   
   for(let i=2; i<=9;i++){
     
   let result = num1*i;
   document.write(`${result} `);      
    
    
   }
}    
console.log(calculator(2));
  */    
   //---------------------------------------Задача №5
   