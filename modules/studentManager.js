const fileManager = require("./fileManager");
function addStudent(student) {
    const students = fileManager.readStudents();
    students.push(student);
    fileManager.saveStudents(students);
}
function getStudents() {
    return fileManager.readStudents();
}
function searchStudent(name) {
    const students = fileManager.readStudents();
    const student = students.find((student) => {
        return student.name === name;
    });
    return student;
}
function deleteStudent(student)
{
    const students = fileManager.readStudents();
    const updatedStudents = students.filter((s) => {
        return s.name !== student.name;
    });
    fileManager.saveStudents(updatedStudents);
}
module.exports = {
    addStudent,
    getStudents,
    searchStudent,
    deleteStudent
};