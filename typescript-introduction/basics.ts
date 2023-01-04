// Primitives: number, string, boolean
let age: number;
age = 38;

let userName: string;
userName = 'gkats';

let isInstructor: boolean;
isInstructor = true;

// =====================================================================================================================

// More complex types: arrays, objects
let hobbies: string[]; // Array of strings
hobbies = ['basketball', 'music'];

let employee: { name: string, age: number }; // Object with specific property types
employee = {
    name: 'George Katsanos',
    age: 38
};

// =====================================================================================================================

// Type inference
let course = 'Course Title';
// TypeScript understands a variable type, even if it is not defined
// Uncomment to check the error
// course = 1234;

// Union Types
let course2: string | number;
course2 = 'Course Title';
course2 = 1; // ID for example
// No TypeScript error!


// Type Aliases
type Person = { name: string, age: number };
let person: Person;
let people: Person[];

// =====================================================================================================================

// Function & types
function add(a: number, b: number): number {
    return a + b;
}

function myConsoleLog(value: any): void {
    console.log('log:', value);
}

// =====================================================================================================================

// Generics: we are telling TypeScript that these parameters are of same type, not 'any' type.
function insertAtBeginning<T>(array: T[], value: T) {
    return [value, ...array];
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // ...thus updatedArray is of type 'number'.

const stringArray = insertAtBeginning(['a', 'b'], 'c'); // But we can also use the same function for strings.

// =====================================================================================================================

// Classes and TypeScript

class Student {
    // The special thing about TypeScript and classes, is that we can define all the properties the class will have
    // in advance and set the type of them
    firstName: string;
    lastName: string;
    age: number;
    // We can also define private properties
    private courses: string[];

    constructor(firstName: string, lastName: string, age: number, courses: string[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }

    enroll(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student('George', 'Katsanos', 38, ['Angular']);
student.enroll('RxJs');
// student.courses; // returns error!
student.listCourses();


class Student2 {
    // Shorthand notation!
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private courses: string[]
    ) {}
}

// =====================================================================================================================

// Interfaces: that's a feature only exists in TypeScript, not in Javascript, therefore it will not be compiled.
// Interfaces are really just object type definitions; we can define the structure of any object we will create.

interface Human {
    firstname: string;
    age: number;

    // We don't add the definition! We only tell that every Human should have a greet method.
    greet: () => void;
}

let me: Human;

me = {
    firstname: 'George',
    age: 38,
    greet() {
        console.log('Hello!');
    }
}

// The difference between a 'type' and an 'interface', is that interfaces can be implemented by classes.
// And when they are, they force classes to have the structure defined by the interface.

class Instructor implements Human {
    firstname: string;
    age: number;
    greet() {
        console.log('Hello!!!');
    }
}
