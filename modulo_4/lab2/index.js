var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(id, age, name, lastname) {
        this.id = id;
        this.age = age;
        this.name = name;
        this.lastname = lastname;
    }
    Person.prototype.getId = function () {
        return this.id;
    };
    Person.prototype.setId = function (id) {
        this.id = id;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.getLastname = function () {
        return this.lastname;
    };
    return Person;
}());
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(id, age, name, lastname, profesion, grados, grupos) {
        _super.call(this, id, age, name, lastname);
        this.profesion = profesion;
        this.grados = grados;
        this.grupos = grupos;
    }
    Teacher.prototype.getProfesion = function () {
        return this.profesion;
    };
    Teacher.prototype.setProfesion = function (profesion) {
        this.profesion = profesion;
    };
    Teacher.prototype.getGrados = function () {
        return this.grados;
    };
    Teacher.prototype.setGrados = function (grados) {
        this.grados = grados;
    };
    Teacher.prototype.setGrupos = function (grupos) {
        this.grupos = grupos;
    };
    Teacher.prototype.getGrupos = function () {
        return this.grupos;
    };
    Teacher.prototype.setEstudiantes = function (estudiantes) {
        this.estudiantes = estudiantes;
    };
    Teacher.prototype.getEstudiantes = function () {
        return this.estudiantes;
    };
    return Teacher;
}(Person));
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(id, age, name, lastname, clases, grade, group) {
        _super.call(this, id, age, name, lastname);
        this.clases = clases;
        this.grade = grade;
        this.group = group;
    }
    Student.prototype.setClases = function (clases) {
        this.clases = clases;
    };
    Student.prototype.getClases = function () {
        return this.clases;
    };
    Student.prototype.setGrade = function (grade) {
        this.grade = grade;
    };
    Student.prototype.getGrade = function () {
        return this.grade;
    };
    Student.prototype.setGroup = function (group) {
        this.group = group;
    };
    Student.prototype.getGroup = function () {
        return this.group;
    };
    return Student;
}(Person));
var clasesStudent1 = ['matematicas', 'español'];
//var estudiante1=new Student(1,20,'migel','Amaya',{'matematicas','español'},10,'grupo1'); 
var estudiante1 = new Student(1, 20, 'migel', 'Amaya', clasesStudent1, 10, 'grupo1');
var clasesStudent2 = ['fisica', 'quimica'];
//var estudiante1=new Student(1,20,'migel','Amaya',{'matematicas','español'},10,'grupo1'); 
var estudiante2 = new Student(2, 15, 'Alex', 'Ruiz', clasesStudent1, 7, 'grupo2');
console.log(estudiante1);
var gradosP1 = [4, 5, 6];
var gruposP1 = ['grupo1', 'grupo2', 'grupo3'];
var profesor1 = new Teacher(2, 45, 'Profesor Carlos', 'Prado', 'ingeniero sistemas', gradosP1, gruposP1);
var estudianP1 = [estudiante1, estudiante2];
profesor1.setEstudiantes(estudianP1);
console.log(profesor1);
