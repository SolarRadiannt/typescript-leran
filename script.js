"use strict";
const greeter = (person) => `Hello ${person.firstName} ${person.lastName}`;
const jimbob = {
	firstName: `Jim`,
	lastName: `Bob`,
};
console.log(greeter(jimbob));
