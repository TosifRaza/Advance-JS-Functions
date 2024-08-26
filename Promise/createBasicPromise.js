// console.log("Test Node")
        //First Promise
// const userCreatePromise=new Promise(function(resolve,reject) {
//     setTimeout(() => {
//         console.log("Hello Promise")
//     }, 2000);
// })
        //Second Promise how to return a value by promise and work of resolve peramiter
// const userCreatePromise=new Promise(function(resolve,reject) {
//     setTimeout(() => {
//         console.log("Hello Promise")
//         resolve({name:"Tosif",sec:"f"})
//     }, 2000);
// })

// userCreatePromise.then((user)=>{
//     return user
// }).then((JSONValue)=>{
//     console.log(JSONValue)
// })

// //Second Promise:- how to return a value and work of resolve peramiter and Without Initialing the promes into any veriable

// new Promise(function(resolve,reject) {
//     setTimeout(() => {
//         console.log("Hello Promise")
//         resolve({name:"Tosif",sec:"f"})
//     }, 2000);
// }).then((value)=>{
//     console.log("First Than",value)
//     return value
// }).then((JSONValue)=>{
//     console.log("Second Than Returned",JSONValue)
// })


//Second Promise:- how to return a value and work of resolve peramiter and Without Initialing the promes into any veriable


// new Promise(function(resolve,reject) {
//     setTimeout(() => {
//         const value=false;
//         if (!value) {
//             resolve({name:"Tosif",sec:"f"})
//         }
//         else
//         {
//             reject(`ERROR:: Something Is Wrong`)
//         }
//     }, 2000);

// }).then((value)=>{
//     console.log("First Than",value)
//     return value
// }).then((JSONValue)=>{
//     console.log("Second Than Returned",JSONValue)
//     // return JSONValue
// }).catch((error)=>{
//     console.log(error)
//     return error
// })


// //INTRODUCE ASYNC FUNCTION

// /////////If data==TRUE
let IntroAsync = new Promise(function(resolve,reject) {
    setTimeout(() => {
        const data= 'https://api.github.com/users/hiteshchoudhary';
        if (data) {         //DADA =TRUE
            resolve(data)
        }
        else{

            reject("SOMETHING WANTS WRONG")
        }
    }, 2000);

})
async function MYfirstAsync() {
    console.log("This Is ",IntroAsync) //I'Ts Showing This is a Promise {<Pending>}
    const response = await IntroAsync //It will initialisation the Panding Promise and exicuate
    console.log(response)             
    console.log("This Is ",IntroAsync) //after execution print for understand
};
MYfirstAsync();
console.log(MYfirstAsync) //I'ts showing This Is a :- [AsyncFunction: MYfirstAsync]




/////////If data==false


// let IntroAsync = new Promise(function(resolve,reject) {
//         setTimeout(() => {
//             const data= null;
//             if (data) {         //data ==false
//                 resolve(data)
//             }
//             else{
    
//                 reject("SOMETHING WANTS WRONG")
//             }
//         }, 2000);
    
//     })
  /*  async function MYfirstAsync() {
        const response = await IntroAsync  //IF i write this code for The panding Promise Than it will give
        console.log(response)             //me an error  :-   code: 'ERR_UNHANDLED_REJECTION' ,Because
    };                                   //I have not define here "catch" Block for the exception(reject pe
    MYfirstAsync();*/                   //ramiter):-triggerUncaughtException(err, true /* fromPromise */);




// async function MYfirstAsync(){
//     try {
//         const response = await IntroAsync
//         console.log(response)  
//     } catch (error) {
//         console.log(error)
//     }
// }
// MYfirstAsync();






//Let's Solve the callBackHell file's problem by using Promise
function printtask(sum){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`This Is An ASYNC function`,sum)
            resolve(`Success ${sum}`)
    },3000);
})
} 
printtask(1).then((res1)=>{
    return printtask(2)
}).then((res2)=>{
    return printtask(3)
}).then((res3)=>{
    return printtask(4)
}).then((res4)=>{
    console.log(res4)
})