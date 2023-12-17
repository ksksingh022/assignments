const fs = require('fs')

// fs.readFile('test_file.txt','utf-8',(err,data)=>{
//     newString = data.split(/\s+/).join(' ');
//     fs.writeFile('test_file.txt',newString,()=>{
//         console.log("File Written Successfully");
//     });
// });

function promisifiedFileReader(){
    let p = new Promise((resolve)=>{
        fs.readFile('test_file.txt','utf-8',(err,data)=>{
            resolve(data)
        })
    });
    return p;
}

// function onRead(data){
//     console.log(data);
// }
// promisifiedFileReader().then(onRead);

function promisifiedFileWriter(cleanedData){
    let p = new Promise((resolve)=>{
        fs.writeFile('test_file.txt',cleanedData,()=>{
            resolve('file write successfull')
        })
    });
    return p;
}


async function cleaningFileAndWrite(){
    let data = await promisifiedFileReader()
    newString = data.split(/\s+/).join(' ')
    // console.log(typeof newString)
    let message = await promisifiedFileWriter(newString)
    console.log(message)
}

cleaningFileAndWrite()

// cleanedData = cleaningFile()

// async function writeToFile(cleanedData){
//     await promisifiedFileWriter(cleanedData)
// }
// writeToFile(cleanedData)