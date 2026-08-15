export type Student = string;
export type Grade = number;
export type GradeGraph = { [grade: Grade]: Student[] };
export type GradeLookup = { [student: Student]: Grade };

export class GradeSchool {
	gradeGraph: GradeGraph = {};
	gradeLookup: GradeLookup = {};

	getStudents(grade: Grade): Student[] {
		let students = this.gradeGraph[grade];
		if (!students) {
			students = [];
			this.gradeGraph[grade] = students;
		}
		return students;
	}

	removeFromExistingGrade(student: Student, existingGrade: Grade) {
		const allStudents = this.gradeGraph[existingGrade];
		const index = allStudents.findIndex((v) => v === student);
		allStudents.splice(index, 1);
	}

	roster(): GradeGraph {
		const copy: GradeGraph = {};

		for (const grade in this.gradeGraph) {
			copy[grade] = [...this.gradeGraph[grade]];
		}

		return copy;
	}

	add(student: Student, grade: Grade) {
		const existingGrade = this.gradeLookup[student];
		if (existingGrade) {
			this.removeFromExistingGrade(student, existingGrade);
		}

		let students = this.getStudents(grade);
		students.push(student);
		students.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
		this.gradeLookup[student] = grade;
	}

	grade(grade: Grade): Student[] {
		return Array.from(this.getStudents(grade));
	}
}
