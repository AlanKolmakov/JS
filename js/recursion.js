const pi = 3.14;
const surfaceAreaCalculator = (radius) => {
	return 4 * pi * square(radius);
};
const square = num => {
	return num * num;
};
const surfaceOfMars = surfaceAreaCalculator(3390); // отвечает как бы на вопрос ЧТО?
console.log(surfaceOfMars);