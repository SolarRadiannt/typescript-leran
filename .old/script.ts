// interface Person {
// 	firstName: string;
// 	lastName: string;
// }

// const greeter = (person: Person) =>
// 	`Hello ${person.firstName} ${person.lastName}`;

// const jimbob: Person = {
// 	firstName: `Jim`,
// 	lastName: `Bob`,
// };

// console.log(greeter(jimbob));

// ## 1. Display Current Day and Time
// const current: Date = new Date();
// console.log(`Current date is: ${current}`);

// ## 2. Print Current Window Contents
// const printCurrentPage = () => window.print();
// printCurrentPage();

// ## 3. Get Current Date in Various Formats
// let today: Date | string = new Date();

// let dd: number | string = today.getDate();
// let mm: number | string = today.getMonth();
// let yyyy: number | string = today.getFullYear();

// if (dd < 10) {
// 	dd = `0${dd}`;
// }
// if (mm < 10) {
// 	mm = `0${mm}`;
// }

// today = `${dd}/${mm}/${yyyy}`;
// console.log(today);

// ## 4. Calculate Area of Triangle (Sides: 5, 6, 7)
// const side1 = 5;
// const side2 = 6;
// const side3 = 7;

// const sides = (side1 + side2 + side3) / 2;
// const area = Math.sqrt(
// 	sides * ((sides - side1) * (sides - side2) * (sides - side3)),
// );
// console.log(area);

// ## 5. Rotate String 'w3resource' Periodically

const animateString = (id: string) => {
	const element = document.getElementById(id);
	if (!element) return;

	const textNode = element.childNodes[0];

	let text = textNode.nodeValue ?? ``;

	setInterval(() => {
		text = text[text.length - 1] + text.substring(0, text.length - 1);
		textNode.nodeValue = text;
	}, 100);
};

animateString(`myHeading`);
