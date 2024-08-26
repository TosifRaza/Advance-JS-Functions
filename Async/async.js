function multiTask(taskno){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`this is a function ${taskno}`)
            resolve("task")
        },3000)
    })
    
}
async function allTask() {
    const value1 = await multiTask(1);
    console.log(value1)
    const value2 = await multiTask(2);
    console.log(value2)
    const value3 = await multiTask(3);
    const value4 = await multiTask(4);
    const value5 = await multiTask(5);
    
    console.log(value3)
    console.log(value4)
    console.log(value5)
   
        
}
allTask()