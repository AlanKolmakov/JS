const weight = 64;
const c = 300000000;
const energy = weight * c;
console.log(energy);
// alert('Энергия моего тела=' + energy);
const pi = 3.14;
const mars = 3397;
const mercury = 2440;
const surfaceAreaCalculator = (radius) => {
	return 4 * pi * radius * radius;
}
const surfaceofMars = surfaceAreaCalculator(mars);
const surfaceofMercury = surfaceAreaCalculator(mercury);
console.log(surfaceofMars);
console.log(surfaceofMercury);

const percentageCalculator = (number, total) => {
	return number * 100 / total;
}
console.log(percentageCalculator(40, 80));

// функция нахождения абсолютного значения в js

const absoluteNumber = num => {
	if (num > 0) {
		return num;
	} else if (num < 0) {
		return -num;
	} else {
		return 0;
	}
};

//другие выражения, которые дают true или false
//=== строгое равенство, !==  не равно, > больше, < меньше, >= больше или равно, <= меньше или рано

//три примитивные операции AND, OR, NOT

//AND (&&) - используется, когда вам нужно чтобы два условия были True
//Я человек AND земля круглая //true
//Я человек AND свиньи могут летать - false