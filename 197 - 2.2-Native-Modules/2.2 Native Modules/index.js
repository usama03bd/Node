const fs = require("fs");

// fs.writeFile("message.txt","welcometopakistan", (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   }); 

// fs.readFile("message.txt", "utf8",(err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

fs.writeFile("welcome.html","<h1>welcome to Node</h1>",(err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); 

fs.readFile("welcome.html", "utf8",(err, data) => {
  if (err) throw err;
  console.log(data);
});
