const fs = require('fs');
const path = require('path');
const dirPath= path.join(__dirname,'crud');    //* <-- Yah folder ka complete path date hai

const filePath = `${dirPath}/apple.txt`;      //* <-- kaun sa file update aur delete karna hai yah Hai Uska directly


// fs.writeFileSync(filePath,'this is a simple file');    //* <--  Yah hai File read Karne Ka Tarika
// fs.readFile(filePath,'utf8',(err,item)=>{
// console.log(item);
// })




// fs.appendFile(filePath,' for fruits',(err)=>{         //* <--  Yah hai File contain ko update karta hai
// if(!err) console.log("file is updated")
// })




// fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{   //* <--  Yah hai File name ko update karta hai 
// if(!err) console.log("file name is updated")
// })



fs.unlinkSync(`${dirPath}/fruit.txt`);                 //* <-- Yah hai File delete Karne Ka Tarika