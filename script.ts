interface Person {
	firstName: string;
	lastName: string;
}

const greeter = (person: Person) =>
	`Hello ${person.firstName} ${person.lastName}`;

const jimbob: Person = {
	firstName: `Jim`,
	lastName: `Bob`,
};

console.log(greeter(jimbob));
