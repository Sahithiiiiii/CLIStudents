const readline = require("readline");
const menu = require("./modules/menu");
const studentManager = require("./modules/studentManager");
const chalk = require("chalk");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function startMenu() {
    menu.showMenu();
    rl.question("Choose an option: ", (choice) => {
        switch (choice) {
            case "1":
                rl.question("Enter the student name to add: ", (name) => {
                rl.question("Enter age: ", (age) => {
                const student = {
                name: name,
                age: Number(age)
                };
                studentManager.addStudent(student);
                console.log(chalk.green("Student Added Successfully"));
                startMenu();
                    });
                });
                return ;
            case "2":
                console.log(studentManager.getStudents());
                break;
            case "3":
                rl.question("Enter name to search ",(name)=>{
                    const student=studentManager.searchStudent(name);
                    if (student) {
                        console.log(student);
                    }
                    else {
                        console.log("student does not found");
                    }
                    startMenu();
                }
                );
                return;
            case "4":
                rl.question("Enter name to delete ",(name)=>
                {
                    const student=studentManager.searchStudent(name);
                    if (student) {
                        studentManager.deleteStudent(student);
                    }
                    else {
                        console.log("No student to delete");
                    }
                    startMenu();
                })
                return ;
            case "5":
                console.log("Thank you!");
                rl.close();
                return;
            default:
                console.log("Invalid Option");
        }
        startMenu();
    });
}
startMenu();
