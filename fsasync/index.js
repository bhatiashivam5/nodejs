const fs = require("fs");

// console.log("Going to write into existing file");
// fs.writeFile('test.txt', 'Simply Easy Learning!', function(err) {
//    if (err) {
//       return console.error(err);
//    }
   
//    console.log("i am learning NodeJs!");
//    console.log("Let's read newly written data");
   
//    fs.readFile('test.txt', function (err, data) {
//       if (err) {
//          return console.error(err);
//       }
//       console.log("Asynchronous read: " + data.toString());
//    });
// });




// (file created and uplink)

fs.writeFile('test2.txt', 'Hi Easy Learning!', function(err) {
   if (err) {
      return console.error(err);
   }
   
fs.readFile('test2.txt', (err,data) => {
    if (err){
        console.error(err)
        return
    }
    console.log(data);
    
});
});

// console.log("Going to delete an existing file");
// fs.unlink('test1.txt', function(err) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("File deleted successfully!");
// });


