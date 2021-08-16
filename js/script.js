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
   /*
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
	*/
//############################################################################################################
//----------------------------------------------12/08/2021
// ---------------------------------------Практическое задание № 4
//---------------------------------------Задача №1
/*
function calculator(num1,num2){
  
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

//---------------------------------------Задача №6(--)
/*
function calculator(num1,num2){
 let a = Math.floor(num1/num2);
 let b = num1-num2*a
 return alert(b);
} 
calculator(4,3);
*/
//---------------------------------------Задача №7
/*
function calculator(num1=0,num2=0,num3=0,num4=0,num5=0){
let sum =+(num1+num2+num3+num4+num5);
return alert(sum);
}
calculator(1,2,250,);
*/
//---------------------------------------Задача №8(ok!)
/*
function calculator(num1=0,num2=0,num3=0,num4=0,num5=0){
	let big =Math.max(num1,num2,num3,num4,num5);
	return alert(big);
	}
	calculator(1,425,250,);
	*/
	//---------------------------------------Задача №9
/*	
function defenisionEven(num1,num2){
let i = num1<num2 ? num1:num2;
let result=0;
for (i; i<=num2;i++){
	if(i%2===0){
	document.write(`${i} `);	
  }else if(i%2===0){
		document.write(`${i} `);	
	}
 }
} 
 defenisionEven(1,15);
*/
//-------------------------------------------- добавление третьено оператора (надо разбиратся)
	/*
	function defenisionEven(num1,num2,isEven){
		let i = num1<num2 ? num1:num2;
	   let result=0;
     let isEven=true;
  for(i;i<=num2;i++){
   //isEven=(true||false) ? document.write(`${i%2===0}`):document.write(`${i%2!=0}`);
		if (isEven=true){
		result=i%2===0;
		document.write(`${result}`);
   } else {
		result=i%2!=0;
		document.write(`${result}`);
   }
  }
}
	defenisionEven(5,25,true);
*/
//---------------------------------------Задача №10
/*
  let date = +prompt('Vvedite datu:');
	let month = +prompt('Vvedite mesyac:');
	let year = +prompt('Vvedite god:');
	let cuerrentDate =(`${date} ${month} ${year}`);
	let newDate = (`${(date+1)} ${month} ${year}`);
	let monthRate = (month===4||month===6||month===9||month===11);
	let february = 2;
	let leapYear = (year%4==0)&&(year%100==0)&&(year%400==0);
	let anotherMonthRate = (month===1||month===3||month===5||month===7||month===8||month===10||month===12); 
	
if (cuerrentDate){
	if ((month===12)&&(date===31)){// go to new year
	  date = 1
	  month = 1;	
	  newDate = (`${date} ${month} ${year+1}`);
	  alert(`'Sleduyuschaya data:'${newDate}`);
  }else if ((date===31)&&anotherMonthRate){//month with 31 days-> next month
		date = 1;
		newDate = (`${date} ${month+1} ${year}`);
		alert(`'Sleduyuschaya data:'${newDate}`);
	} else if ((date<31)&&anotherMonthRate){// month with 31days where 28,29,30th day ->next day 
		newDate = (`${(date+1)} ${month} ${year}`);
		alert(`'Sleduyuschaya data:'${newDate}`);
	}
		
  if((date===30)&&(monthRate)){// month with 30 days -> new month;
	  date = 1;
	  newDate = (`${(date)} ${month+1} ${year}`);		
	  alert(`'Sleduyuschaya data:'${newDate}`);
  } else if((date<30)&&(monthRate)){// month with 30 days 28,29th day ->30 
	  newDate = (`${(date+1)} ${month} ${year}`);		
    alert(`'Sleduyuschaya data:'${newDate}`);
  }

	if ((date===29)&&(month===2||february)&&leapYear) {//leap year: 29->new month
		date=1;
		newDate = (`${(date)} ${month+1} ${year}`);
		alert(`'Sleduyuschaya data:'${newDate}`);
  }

  if ((date===28)&&(month===2||february)&&leapYear) {		//leap year: 28->29
	newDate = (`${(date+1)} ${month} ${year}`);
	alert(`'Sleduyuschaya data:'${newDate}`)
  } else if((date===28)&&(month===2||february)){//month with 28 days-> next month
	  date=1;
	  newDate = (`${(date)} ${month+1} ${year}`);
	  alert(`'Sleduyuschaya data:'${newDate}`);
  }
		
  alert(`'Tekuschaya data:' ${cuerrentDate}`);

}
*/

/*
function getNextDate(date,month,year){

return newDate = (`${(date+1)} ${month} ${year}`);
}
console.log(getNextDate(13,08,2021));
*/
