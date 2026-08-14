"use strict";
// alert(`age check required!`)
// let result = prompt(`How old are you?`, `18`);
// alert(`You are ${result} years old`)
// const isCool = confirm(`Are you cool?`)
// if (isCool) {
// 	alert(`Welcome to the club!`)
// } else {
// 	alert(`Shoo get out`)
// }
// const a = prompt(`a?`, ``);
// if (a) {
// 	const v = +a
// 	switch (v) {
// 		case 0:
// 			alert(0)
// 			break;
// 		case 1:
// 			alert(1)
// 			break;
// 		case 2:
// 		case 3:
// 			alert(`2, 3`);
// 			break;
// 	}
// }
// type User = string;
// type Message = string;
// const userName = `John`
// const from = `Ann`
// function greetUser(user: User) {
// 	alert(`Hello ${user}!`)
// }
// function showMessage() {
// 	alert(`Hello everyone!`)
// }
// function sendMessage(from: User, message: Message = `Missing Text`) {
// 	alert(`*${from}*: ${message}`)
// }
// showMessage()
// greetUser(userName)
// sendMessage(from, `Hellow`)
// sendMessage(from, undefined)
// function checkAge(age: number): boolean {
// 	if (age >= 18)
// 		return true
// 	return confirm(`Do you have permission from your parent?`)
// }
// function showMovie(age: number) {
// 	if (!checkAge(age)) return;
// 	alert(`Showing you the movie`)
// }
// alert(showMovie)
// const age = prompt(`How old are you?`) ?? `0`
// if (checkAge(+age)) {
// 	alert(`Access Granted`)
// 	showMovie(+age)
// } else
// 	alert(`Access Denied`)
// function ask(question: string, yes: () => void, no: () => void) {
// 	if (confirm(question))
// 		yes()
// 	else
// 		no()
// }
// function showOk() {
// 	alert(`You agreed.`)
// }
// function showCancel() {
// 	alert(`You cancelled the execution.`)
// }
// ask(`Do you agree?`,
// 	() => alert(`Haha thank you.`),
// 	() => alert(`Fuck you dude.`),
// )
// interface User {
// 	name: string,
// 	age: number,
// 	isAdmin: boolean,
// }
// const john: User = {
// 	name: `John`,
// 	age: 30,
// 	isAdmin: false,
// }
// alert(john.name)
// alert(john.age)
// const copy = structuredClone(john)
// alert(copy)
// type Ladder = {
// 	step: number,
// 	up: () => Ladder,
// 	down: () => Ladder,
// 	showStep: () => Ladder,
// }
// const ladder: Ladder = {
// 	step: 0,
// 	up() {
// 		this.step++
// 		return this
// 	},
// 	down() {
// 		this.step--
// 		return this
// 	},
// 	showStep() {
// 		alert(this.step)
// 		return this
// 	},
// }
// ladder
// 	.up()
// 	.up()
// 	.down()
// 	.showStep()
// 	.down()
// 	.showStep()
// class User {
// 	name: string;
// 	isAdmin: boolean;
// 	constructor(public username: string) {
// 		this.name = username
// 		this.isAdmin = false
// 	}
// }
// const jack = new User(`Jack`)
// function loadScript(src: string, callback: (error: Error | null, script: HTMLScriptElement)=>void): void {
// 	const script = document.createElement(`script`)
// 	script.src = src
// 	script.onload = () => callback(null, script)
// 	script.onerror = () => callback(new Error(`Script load error for ${src}`), script)
// 	document.head.append(script)
// }
// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', (error, script) => {
// 	if (error) {
// 		alert(`found error: ${error}`)
// 		return
// 	}
// 	alert(`Cool, the script ${script.src} is loaded`)
// })
// const myPromise = new Promise<string>((resolve, reject) => {
// 	setTimeout(() => resolve("done"), 1000)
// }).then(
// 	result => alert(result),
// 	error => alert(error)
// )
// function delay<T>(ms: number, value: T): Promise<T> {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(()=>resolve(value), ms)
// 	})
// }
// type GithubUser = {
// 	avatar_url: string;
// };
// async function showAvatar(username: string): Promise<GithubUser> {
// 	const response = await fetch(`file://api.github/users/${username}`)
// 	const user: GithubUser = await response.json()
// 	const image = document.createElement(`img`)
// 	image.src = user.avatar_url
// 	image.className = `promise-avatar-example`
// 	document.body.append(image)
// 	await new Promise(resolve => setTimeout(resolve, 3000));
// 	image.remove()
// 	return user
// }
// showAvatar(`SolarRadiannt`)
// async function loadJson(url: string) {
// 	const response = await fetch(url);
// 	if (response.status == 200) {
// 		const json = response.json();
// 		return json;
// 	}
// 	throw new Error(String(response.status));
// }
// loadJson(`https://javascript.info/no-such-user.json`).catch(alert);
// type NumRange = {
// 	from: number;
// 	to: number;
// 	[Symbol.iterator]: () => NumRange;
// };
// const range = {
// 	from: 1,
// 	to: 5,
// 	// [Symbol.iterator]() {
// 	// 	return {
// 	// 		current: this.from,
// 	// 		last: this.to,
// 	// 		next() {
// 	// 			if (this.current <= this.last) {
// 	// 				return { done: false, value: this.current++ };
// 	// 			} else {
// 	// 				return { done: true };
// 	// 			}
// 	// 		},
// 	// 	};
// 	// },
// 	*[Symbol.iterator]() {
// 		for (let value = this.from; value <= this.to; value++) {
// 			yield value;
// 		}
// 	},
// };
// alert([...range]);
// function* pseudoRandom(seed: number) {
// 	let value = seed;
// 	while (true) {
// 		value = (value * 16807) % 2147483647;
// 		yield value;
// 	}
// }
// const rng = pseudoRandom(1);
// alert(rng.next().value);
// alert(rng.next().value);
// alert(rng.next().value);
