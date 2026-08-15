type Hour = number;
type Minute = number;

export class Clock {
	static HOUR = 24;
	static MINUTE = 60;

	hours: Hour = 0;
	minutes: Minute = 0;

	normalize() {
		while (this.minutes >= Clock.MINUTE) {
			this.minutes -= Clock.MINUTE;
			this.hours++;
		}

		while (this.minutes < 0) {
			this.minutes += Clock.MINUTE;
			this.hours--;
		}

		while (this.hours >= Clock.HOUR) {
			this.hours -= Clock.HOUR;
		}

		while (this.hours < 0) {
			this.hours += Clock.HOUR;
		}
	}

	constructor(hours: Hour, minutes: Minute = 0) {
		this.hours = hours;
		this.minutes = minutes;
		this.normalize();
	}

	public toString(): string {
		let hour: string;
		let minute: string;

		if (this.hours < 10) {
			hour = `0` + this.hours;
		} else {
			hour = this.hours.toString();
		}
		if (this.minutes < 10) {
			minute = `0` + this.minutes;
		} else {
			minute = this.minutes.toString();
		}

		return `${hour}:${minute}`;
	}

	public plus(minutes: Minute): Clock {
		if (minutes < 0) {
			return this;
		}

		this.minutes += minutes;

		this.normalize();

		return this;
	}

	public minus(minutes: Minute): Clock {
		if (minutes < 0) {
			return this;
		}

		this.minutes -= minutes;
		this.normalize();

		return this;
	}

	public equals(other: Clock | string): boolean {
		if (typeof other === "string") {
			return this.toString() === other;
		}
		return this.minutes === other.minutes && this.hours == other.hours;
	}
}
