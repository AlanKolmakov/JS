// const weight = 64;
// const c = 300000000;
// const energy = weight * c;
// console.log(energy);
// alert('Энергия моего тела=' + energy);
// const pi = 3.14;
// const mars = 3397;
// const mercury = 2440;
// const surfaceAreaCalculator = (radius) => {
// 	return 4 * pi * radius * radius;
// }
// const surfaceofMars = surfaceAreaCalculator(mars);
// const surfaceofMercury = surfaceAreaCalculator(mercury);
// console.log(surfaceofMars);
// console.log(surfaceofMercury);

// const percentageCalculator = (number, total) => {
// 	return number * 100 / total;
// }
// console.log(percentageCalculator(40, 80));

//функция нахождения абсолютного значения в js

// const absoluteNumber = num => {
// 	if (num > 0) {
// 		return num;
// 	} else if (num < 0) {
// 		return -num;
// 	} else {
// 		return 0;
// 	}
// };

//другие выражения, которые дают true или false
//=== строгое равенство, !==  не равно, > больше, < меньше, >= больше или равно, <= меньше или рано

//три примитивные операции AND, OR, NOT

//AND (&&) - используется, когда вам нужно чтобы два условия были True
//Я человек AND земля круглая //true
//Я человек AND свиньи могут летать - false
//OR (||) - используется, если вам нужно, чтобы хотя бы одно условие было истинным
// Я человек OR лошади едят траву - true
// Я человек OR свиньи могут летать - true
// NOT (!) - это просто отрицание.
//NOT свиньи могут летать - true


//условная конструкция if выражением не является. это инструкция - выполняет действие, ничего не вычисляя и не возвращая.
// const absoluteNumber = num => {
// 	if (num > 0 || num === 0) {
// 		return num;
// 	} 
// 	else {
// 		return - num;
// 	}
// };

//тернарный оператор - сокращенная версия if
//condition ? expression : expresiion
// const absValue = (num === 0 || num > 0) ? num : -num;

//тернарная или условная операция вычисляет и возвращает значения, т.е является выражением.

// const isEven = num => num % 2 === 0;
// const increaseNum = num => num + 10;
// const num = 6;
// const result = isEven(increaseNum(num) + 1) ? num + 1 : 1 - num;
// console.log(result);



// const getColour = colour => {
// 	if(colour === 'white') {
// 		return 'white';
// 	}
// 	else {
// 		return 'black';
// 	}
// };


// const getColour = colour => colour === 'white' ? 'white' : 'black';
// console.log(getColour('abs'));


// функцию, которая вычисляет итоговую оценку студента на основе двух параметров: оценки за экзамен и количества законченных проектов. 
/*
функция принимает два аргумента:
- exam - оценка за экзамен (число 0 до 100)
- projects - количество проектов (число от 0 и выше)

функция возвращает: число (итоговую оценку)
- 100, если оценка за экзамен выше 90 или есть больше 10 проектов
- 90, если оценка за экзамен выше 75 и есть как минимум 5 проектов
- 75, если оценка за экзамен выше 50 и есть как минимум 2 проекта
0 в любом другом случае

myFunction(100, 12); // 100
myFunction(10, 15); // 100

myFunction(55, 0); // 0
*/


totalScore = (exam, projects) => {
	if(exam>90 || projects>=15) {
		return 100;
	}
	else if(exam>=75 && projects>=5) {
		return 90;
	}
	else if(exam>50 && projects>=2) {
		return 75;
	}
	else return 0;
};

console.log(totalScore(45, 15));