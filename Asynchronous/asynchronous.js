function sum(data,callBack) {   // function jokhon call hobe data te asbe 1,and data2 te asbe akta function 
    setTimeout(()=>{         //er refarance [ ()=>{ sum(2) } ,ai function er ],Than setTimeOut start hobe 
        console.log("This Is An ASYNC function",data) //and 3s w8 korbe exicuate start howar than line 3 
       if(callBack){        //print hobe ("This Is An ASYNC function",1) than chect hobe data2 te ki6u valu
        console.log("D@ Printed") //aslo ki na r sekhane amra akta function pass kore6i tai ota conditition 
        callBack();                     //true hobe than data2() call hobe ,and sum(2) call hobe than second
       }                                //output asbe 3000 sec pore
    },3000);
}
sum(1,()=>{
    sum(2)
});





