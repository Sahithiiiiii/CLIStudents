const path=require('path');
const filePath = path.join(
    __dirname,
    "..",
    "data",
    "students.json"
);
const fs=require('fs')
function readStudents() {
    const read=fs.readFileSync(filePath,'utf8');
    return JSON.parse(read);
}
function saveStudents(students)
{
    fs.writeFileSync(filePath,JSON.stringify(students),'utf8');
}
module.exports={saveStudents,readStudents}