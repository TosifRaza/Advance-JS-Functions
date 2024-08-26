            //CALLBACKHELL

function sum(data,callBack) {   
    setTimeout(()=>{        
        console.log("This Is An ASYNC function",data) 
       if(callBack){        
        console.log("D@ Printed")
        callBack();                     
       }                               
    },3000);
}
sum(1,
    ()=>sum(2,
        ()=>sum(3,
            ()=>sum(4,
                ()=>sum(5,
                    ()=>sum(6,
                            ))))));

//This is a call back hell setuation because this way is complex  .For solve this Problem js Introduc "Promises " ;



