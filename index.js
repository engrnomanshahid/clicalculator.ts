import inquirer from "inquirer";
async function askQuestion() {
    let answers = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            massage: "Which type of calculation you want perform ? \n",
            Choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            massage: "Enter Number 1:"
        },
        {
            type: "number",
            name: "num2",
            massage: "Enter Number 2:"
        }
    ]);
    if (answers.operator == "Addition") {
        console.log('${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}');
    }
    // else if(answers.operator == "Subtraction"){
    //     console.log('${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}');
    // }
    // else if(answers.operator == "Multiplication"){
    //     console.log('${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}');
    // }
    // else if(answers.operator == "Division"){
    //     console.log('${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}');
    // }
}
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do You Want To Continue ? Pres Y or N"
        });
    } while (again.restart == "Y" || again.restart == "y" || again.restart == "YES" || again.restart == "yes");
}
startAgain();
