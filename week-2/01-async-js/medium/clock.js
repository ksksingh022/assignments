// setInterval(()=>{
//     let d = new Date()
//     console.log(d.getHours()+":"+d.getMinutes()+':'+d.getSeconds());
// },1000)

function printTime(){
    setTimeout(()=>{
        let d = new Date()
        console.log(d.getHours()+":"+d.getMinutes()+':'+d.getSeconds());
        printTime();
    },1000)
}

printTime()


