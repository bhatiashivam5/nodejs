const fs = require("fs");

// creating a new file synchronously
// fs.writeFileSync("mydata.txt","Welcome to NodeJs Training")

// fs.writeFileSync("mydata.txt","Hi Everyone, Welcome to NodeJs Training")

// fs.appendFileSync("mydata.txt","In this training we will discuss all topics of nodejs")

// const data = fs.readFileSync("mydata.txt");
// new_data = data.toString();
// console.log(new_data);
// to rename the file

fs.renameSync('mydata.txt','mynewdata.txt');