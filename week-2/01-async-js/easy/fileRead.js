const fs = require('fs')
fs.readFile('sample_file_1.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})

fs.writeFile('sample_file_2.txt',"I am writing this on file",(err)=>{
    if(err){
        console.log(err);
    }
})