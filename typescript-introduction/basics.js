var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Primitives: number, string, boolean
var age;
age = 38;
var userName;
userName = 'gkats';
var isInstructor;
isInstructor = true;
// =====================================================================================================================
// More complex types: arrays, objects
var hobbies; // Array of strings
hobbies = ['basketball', 'music'];
var employee; // Object with specific property types
employee = {
    name: 'George Katsanos',
    age: 38
};
// =====================================================================================================================
// Type inference
var course = 'Course Title';
// TypeScript understands a variable type, even if it is not defined
// ToDo: Uncomment to check error
// course = 1234;
// Union Types
var course2;
course2 = 'Course Title';
course2 = 1; // ID for example
var person;
var people;
// =====================================================================================================================
// Function & types
function add(a, b) {
    return a + b;
}
function myConsoleLog(value) {
    console.log('log:', value);
}
// =====================================================================================================================
// Generics: we are telling TypeScript that these parameters are of same type, not 'any' type.
function insertAtBeginning(array, value) {
    return __spreadArray([value], array, true);
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1); // ...thus updatedArray is of type 'number'.
var stringArray = insertAtBeginning(['a', 'b'], 'c'); // But we can also use the same function for strings.
// =====================================================================================================================
// Classes and TypeScript
var Student = /** @class */ (function () {
    function Student(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
    Student.prototype.enroll = function (courseName) {
        this.courses.push(courseName);
    };
    Student.prototype.listCourses = function () {
        return this.courses.slice();
    };
    return Student;
}());
var student = new Student('George', 'Katsanos', 38, ['Angular']);
student.enroll('RxJs');
// student.courses; // returns error!
student.listCourses();
var Student2 = /** @class */ (function () {
    // Shorthand notation!
    function Student2(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
    return Student2;
}());
var me;
me = {
    firstname: 'George',
    age: 38,
    greet: function () {
        console.log('Hello!');
    }
};
// The difference between a 'type' and an 'interface', is that interfaces can be implemented by classes.
// And when they are, they force classes to have the structure defined by the interface.
var Instructor = /** @class */ (function () {
    function Instructor() {
    }
    Instructor.prototype.greet = function () {
        console.log('Hello!!!');
    };
    return Instructor;
}());
