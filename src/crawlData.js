const { exec } = require("child_process");


console.log(exec)

exec('echo 123', (error, stdout, stderr) => {
    console.log(error, stderr, stdout)
})