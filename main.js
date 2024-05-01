#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class School {
    addstudent(stdobj) {
        this.students.push(stdobj);
    }
    addTeacher(teobj) {
        this.students.push(teobj);
    }
    constructor(name) {
        this.students = [];
        this.teachers = [];
        this.name = name;
    }
}
class Student {
    constructor(name, age, SchoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = SchoolName;
    }
}
class Teacher extends Student {
}
let school1 = new School("Jinnah Model Boys School Kashmore");
let school2 = new School("Ghazali Higher secondary School");
let school3 = new School("Sun Light Model  School");
let s1 = new Student("Ali", 18, school1.name);
let s2 = new Student("Nabi Dost", 15, school2.name);
let s3 = new Student("Tanveer", 23, school1.name);
let t1 = new Teacher("Aamir", 29, school1.name);
let t2 = new Teacher("Sulman", 33, school2.name);
let t3 = new Teacher("Shah Rukh", 38, school3.name);
school1.addstudent(s1);
school2.addstudent(s2);
school3.addstudent(s3);
//  Teacher
school1.addTeacher(t1);
school2.addTeacher(t2);
school3.addTeacher(t3);
console.log(t1);
console.log(t2);
console.log(t3);
// school
console.log(school1);
console.log(school2);
console.log(school3);
