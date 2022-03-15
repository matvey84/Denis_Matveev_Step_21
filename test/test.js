//-------------------------------------------------Задача № 1 Кошелёк(100)
solution = function (pocketStr) {
	let arr = pocketStr.split('+')
	let bunArr=[]
	let centArr=[]
	
	for(item of arr){
		item.includes('бун')&& bunArr.push(parseInt(item))
		item.includes('коп')&& centArr.push(parseInt(item))
	}
	let centAmmount = centArr.reduce((sum,bun)=> sum+bun,0)
	let bunAmmount = bunArr.reduce((sum,bun)=> sum+bun,0)
	let wholePart = Math.trunc((centAmmount/100).toFixed(2))

	bunAmmount += wholePart
	centAmmount=  (centAmmount-wholePart*100)
	return `${bunAmmount}бун ${centAmmount}коп`
//-------------------------------------------------

};
//solution('5бун 30коп+5бун 30коп+5бун 30коп+50')
//-------------------------------------------------Задача № 2 Зодиак(100)
solution = function (dateStr) {
	let arr = dateStr.split('/')
	let day = Number(arr.splice(0,1).join())
	let month= Number(arr.join())


		if(month===3){
			if (day>=21 && day<=31) return 'Овен'
		} else if (month===4){
				if (day>=1 && day<=20) return 'Овен'
		}
		if(month===4){
			if(day>=21 && day<=30)  return 'Телец'
		} else if (month===5){
				if(day>=1 && day<=21) return 'Телец'
		}
		if(month===5){
			if(day>=22 && day<=31)  return 'Близнецы'
		} else if (month===6){
				if(day>=1 && day<=21) return 'Близнецы'
		}
		if(month===6){
			if(day>=22 && day<=30)  return 'Рак'
		} else if (month===7){
				if(day>=1 && day<=22) return 'Рак'
		}
		if(month===7){
			if(day>=23 && day<=31)  return 'Лев'
		} else if (month===8){
				if(day>=1 && day<=21) return 'Лев'
		}
		if(month===8){
			if(day>=22 && day<=31)  return 'Дева'
		} else if (month===9){
				if(day>=1 && day<=23) return 'Дева'
		}
		if(month===9){
			if(day>=24 && day<=30)  return 'Весы'
		} else if (month===10){
				if(day>=1 && day<=23) return 'Весы'
		}
		if(month===10){
			if(day>=24 && day<=31)  return 'Скорпион'
		} else if (month===11){
				if(day>=1 && day<=22) return 'Скорпион'
		}
		if(month===11){
			if(day>=23 && day<=30)  return 'Стрелец'
		} else if (month===12){
				if(day>=1 && day<=22) return 'Стрелец'
		}
		if(month===12){
			if(day>=23 && day<=31)  return 'Козерог'
		} else if (month===1){
				if(day>=1 && day<=20) return 'Козерог'
		}
		if(month===1){
			if(day>=21 && day<=31)  return 'Водолей'
		} else if (month===2){
				if(day>=1 && day<=19) return 'Водолей'
		}
		if(month===2){
			if(day>=20 && day<=29)  return 'Рыбы'
		} else if (month===3){
				if(day>=1 && day<=20) return 'Рыбы'
		}

};
//console.log(solution('29/02'))
//-------------------------------------------------Задача № 3 Минимальные значения(100)
let strArr = [ '1 2 22 55 63', '2 5 0', '3 0 0', '99 99 99 999 99999 999 999 99', '0 0 0 0 0', ]
solution = function (strArr) {
let matrix = []
for(let i=0; i<strArr.length; i++){
	let arr = strArr[i].split(' ').map(Number)
	matrix.push(arr)
}
let result = matrix.map(item=>{return Math.min(...item)}).reduce((sum,num)=>sum+num,0)
return result
};
//solution(strArr)
//----------------------------------------------------------//Задача № 4 Матрица(100)
// let mtrx = [
// 	'0 n 0 0 0',
//   '1 2 1 1 ',
// 	'10 2 2 2 2',
// 	'3 6 3 3 3',
// 	'null u 3   3',
//  ]
let mtrx = [
	[1,2,3,4,5],
	[2,2,3,4,5],
	[4,4,5,6,7],
 ]
	solution = function (matrix) {

// let newMаtrix = matrix.map((item, i)=>item.split(' ').map(Number))//если строки
 let result = matrix.map((num, i)=>num.splice(0,i))
 //.map(item=>item.filter(nan=>!!nan))//если строки
 .filter(item=>item.length!==0)
.map((item)=>item.reduce((sum,num)=>sum+num,0))
.reduce((sum,num)=>sum+num,0)

return result

	};
	//console.log(solution(mtrx))

//----------------------------------------------------------//Задача № 5 Sum Strings as Numbers(75)
solution = function (str1,str2) {
	//---------------- 75баллов
	let concatString = str1 + ' ' + str2
	let result = concatString.split(' ').map(Number).reduce((sum, num)=> sum+num,0) 
  return String(result)//или string
	// //------------------------

};
//let string1 = '1848748748744682'
//let string2 = '256565 564564563'
//console.log(solution(string1, string2))




//------------------------------------------------------------//Задача № 6 Сумма одного числа(100)
solution = function (x) {
		let i=1;
		let result=0;
		while(i<=x){
			result+=i;//=> factorial kazhdogo chisla 1=2;2=4;3=6;4=24;5=120;6=720;....

		i++;
}
return result
	};
//	console.log(solution(2))
//------------------------------------------------------------//Задача № 7 Проверка на целое число()
let numArr = [1,5.5,6]
solution = function (arr) {

let result = arr.filter(item => Number.isInteger(item))
let avarage = result.reduce((sum,num)=>sum+num)/result.length
return Number.isInteger(avarage)||avarage%1===0

};
	//console.log(solution(numArr))

 

//--------------------------------------------------------------

	solution = function (str1,str2) {
		//---------------- 75баллов
		let length = Math.max(str1.length,str2.length)
		let padStr1 = str1.padStart(length, '0')
		let padStr2 = str2.padStart(length, '0')
		
let arr1 = [...padStr1].map(Number)
let arr2 = [...padStr2].map(Number)
console.log(arr1,arr2)
let sumArr=[]
let anotherArr=[]
for(let i=0; i <length; i++){
	for(let j=0; j <length; j++){
		sum = (i===j) && arr1[i]+arr2[j]
		sum===10? sumArr.push(0/*Number(...[sum].join('').split('').splice(1,'1'))*/):	Number.isInteger(sum) && sumArr.push(sum)
		// Number.isInteger(sum) && sumArr.push(sum)
	
	}
}
sumArr.reverse()
console.log(sumArr.reverse())
  let finalArr=[]
//  let n=0
   for(let x=0; x < sumArr.length;x++){
 		sumArr[x]===0 ? finalArr.push(sumArr[x+1]+1): finalArr.push(sumArr[x])
		numarr = sumArr[x]===10 && 0
//     //n = numArr.length>0 && numArr.splice(0,'1')
//	console.log(sumArr[0]===0,sumArr[x+1]+1)
//     //sumArr[x]>9 ? sumArr[x]=0 : sumArr[x] +=1
 		finalArr.push(numArr)
// 		finalArr.map(num=>num+1)
// 		for(let n=0;finalArr.length; n++){
//       ///finalsum = finalArr[n]
// 			console.log(finalsum)

		}
	//	console.log(finalArr)

// let result = [];
//   let mind = 0;
//   let arr = [...arguments].map(a => [...a + ""].reverse());

// 	console.log(arr)

//   let length = arr.reduce((s, a) => s > a.length ? s : a.length, 0);

// 	console.log(length)
//   for (let i = 0; i < length; i++) {
//     let digits = arr.map(num => (+num[i]) | 0);
// 		console.log(digits)
//     let value = digits.reduce((sum, digit) => digit + sum, 0) + mind;
// 		console.log(value)
//     mind = value / 10 | 0;
// 		console.log(value / 10 | 0)
//     result.push((value % 10) + "");
// 		console.log(result)
//   }
//   return ((mind || "") + result.reverse().join("")) || 0;



//console.log(finalArr,'final', n)

//let newSumArrRev = sumArr.filter(Number).reverse()
//console.log(newSumArrRev)



	// 	let concatString = str1 + ' ' + str2
	// let result = concatString.split(' ').map(Number).reduce((sum, num)=> sum+num,0) 
  //result = (result <= (2**53)-1)? result : `${result}n`
  //if(BigInt(result)){return 'jlskdhsd'}



//  console.log(result)
//   return String(result)//или string
	
	};
	let string1 = '4801'//String(4**54)//'9007199254740992'
	let string2 = '99'//String(2**54)//'256565564564563'
	console.log(solution(string1, string2))

	

	







