function sum(arr :number[] ) : number {
    // let resultSum: number = 0;
    // for (let num of arr){
    //     resultSum +=num;
    // }
    // return resultSum;
    return arr.reduce((a, b) => a + b);
}

function isEven(num :number) : boolean {
    return num%2 === 0 ? true:false;
}

console.log(sum([1,2,3]));
console.log(isEven(0));


// ex2
class Students {
    name: string;
    age: number;
    grades: number[];

    constructor (name: string, age: number){
        this.name= name;
        this.age= age;
        this.grades= [];
    }
    addGrade(grade: number) : void {
        this.grades.push (grade);
    }
    getGradeAvg(): number {
        let avrg : number= sum(this.grades)/(this.grades.length);
        return avrg;
    }
}

const student1= new Students ('bob', 20);
student1.addGrade(100);
student1.addGrade(99);
student1.addGrade(98);
student1.addGrade(97);
console.log(student1.getGradeAvg());

// const student1: Student = new Student("John Smith", 23, [77,68,99,98]);
// const student2: Student = new Student("Mike Johnson", 35, [84,85,75,88]);
// const student3: Student = new Student("Jeff Howard", 32, [79,92,94,96]);
  
// const students: Student[] = [student1, student2, student3];

// students.forEach(student => {
//     console.log(`${student.full_name}: ${student.getGradeAvg()}`);
