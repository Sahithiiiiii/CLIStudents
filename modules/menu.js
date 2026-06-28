const chalk = require("chalk");
function showMenu() {
    console.log(chalk.blue("\n===== Student Management System ====="));
    console.log("1. Add Student");
    console.log("2. View Students");
    console.log("3. Search Student");
    console.log("4. Delete Student");
    console.log("5. Exit");
}
module.exports = {
    showMenu
};