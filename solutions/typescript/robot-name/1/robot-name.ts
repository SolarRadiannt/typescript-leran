type RobotName = string;

export class Robot {
  private _name: string | null = null;
  private static usedName = new Set<RobotName>();

  private static randomLetter(): string {
    const letterCharIndex = 65;
    const alphabetLength = 26;

    return String.fromCharCode(
      letterCharIndex + Math.floor(Math.random() * alphabetLength),
    );
  }
  private static randomDigit(): number {
    return Math.floor(Math.random() * 10);
  }
  private static generateName(): RobotName {
    const letter1 = Robot.randomLetter();
    const letter2 = Robot.randomLetter();

    const digit1 = Robot.randomDigit();
    const digit2 = Robot.randomDigit();
    const digit3 = Robot.randomDigit();

    return letter1 + letter2 + digit1 + digit2 + digit3;
  }

  constructor() {}

  public get name(): RobotName {
    if (this._name === null) {
      let chosen: RobotName;
      do {
        chosen = Robot.generateName();
      } while (Robot.usedName.has(chosen));

      this._name = chosen;
      Robot.usedName.add(chosen);
    }

    return this._name;
  }

  public resetName(): void {
    if (!this._name) return;

    this._name = null;
  }

  public static releaseNames(): void {
    this.usedName.clear();
  }
}
