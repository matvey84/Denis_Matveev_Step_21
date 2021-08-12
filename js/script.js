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
let num = +prompt('3424'); //5
let Prostoe = true;
for(let i= 2; i<num; i++) {
    if(num % i === 0) {
        Prosto = false;
        break;
    };
}

Prostoe ? console.log('prostoe') : console.log('neprostoe')
*/
//-------------------------------------практическое задание №3

//-----------------------------------ЗАДАЧА №1(ok!)
/*let num= +prompt('chislo');
let i =1;
while(i<=num){
	document.write( ' # ' );
		i++;
}*/
//-----------------------for
/*for(let i=1;i<=num;i++){
	document.write(' # ');
}*/


//-----------------------------------ЗАДАЧА №2(ok!)
/*let num= +prompt('chislo');
let i=num;
while(i>=0){
	document.write(i);
	i--;
}*/
//--------------- for
/*
for (let i= num; i>=0;i--){
	document.write(`${i}, `);}
	*/
	
//-----------------------------------ЗАДАЧА №3
/*let num=+prompt('chislo');
let step=+prompt('stepen');
let result = 1;
let i =1;

while(i<=step){
	result*=num;
	i++;
}document.write(result);
*/
//--------------------------ЗАДАЧА №4
/*let num1=+prompt('chislo1');//20
let num2=+prompt('chislo2');//2
//let i = 0;
let result =0; 
let finResult;
let max = num1>num2 ? num1:num2;
let min = num2<num1 ? num2 :num1;

//num1>num2 ? num2:num1;
while(max>=1){
result = max/min;
result =(min/result);//5
finResult= result/result;
document.write(finResult);
max--;
console.log(finResult);
}*/


//-------------------pravilniy otvet
/*let chislo1 = +prompt('Vvedite chislo 1');
let chislo2 = +prompt('Vvedite chislo 2');
let i = chislo1 > chislo2 ? chislo2 : chislo1;
while (i>=1) {
    if(chislo1 % i === 0) {
        if(chislo2 % i === 0) {
            document.write(`${i} `);
        }
    }
    i--;
}*/
//--------------------------ЗАДАЧА №5(ok!)
/*
let num=+prompt('chislo');

let i=1;
let result=1;

while(i<=num){
	result*=(i);//=> factorial kazhdogo chisla 1=2;2=4;3=6;4=24;5=120;6=720;....

i++;
}	document.write(`${result} `);//esli vyvod vnesti v skobki nto srabotaet cikl i vyvedetto cto v verhnem komentarii
*/
//------------------------------------(DO...WHILE)
//--------------------------ЗАДАЧА №1(ok!)
/*let question; 
let ans = 6;
do {
question= +prompt('пример:2+2*2');
if(question===ans){
	break;			
	}
 }while(ans===6)
 document.write('Pravilno!');
*/
//--------------------------ЗАДАЧА №2(--)
/*
let num =1000;
let num2 = 2;
let i = 1;
let result=0;

do {
		num=num/num2;
		
		console.log(num);

		
}while(num>=50)
		
console.log(num2);
*/
//--------------------------------------for
//--------------------------ЗАДАЧА №3(+)
/*
let a = +prompt('delitel');
for(i=1; i<=100;i++){
if (i%a===0){

	document.write(`${i}, `);
}
}
*/
//--------------------------ЗАДАЧА №4(ok+-)
/*let num1 = +prompt('chislo1');
let num2 = +prompt('chislo1');
result=0;
let i=num1<num2 ? num1:num2;// diapozon!!!!!!!!!!! (-)
for(let i=1;i<=num2;i++){
	if(result=i%4===0){
		document.write(`${i} `);
	}
  }*/
	//--------------------------ЗАДАЧА №5
	let num = +prompt('chislo1');
	let result;;//= (num%num===0)&&num%2===0 ? true:false;
	for(let i= 2; i<num; i++){

	if (num%i===0){
		result=false;
				break;
	};//else{result=true;
	//}
}
result ? document.write('neprostoe'):document.write('prostoe');
	
