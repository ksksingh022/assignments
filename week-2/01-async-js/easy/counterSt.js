function update(i){
    setTimeout(()=>{
            i++;
            console.log(i);
            update(i);
    },1000);
}

update(0);  
