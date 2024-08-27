function myName() {
    console.log("I");
    console.log("F");
    console.log("F");
    console.log("I");

}

// myName()

function loginUserMessage (username){
    if(!username){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Iffi"));



function calculateCartPrice (...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 800, 1000));


const user = {
    username: "Irfan khan",
    price: 199,

}


function handleObject (anyobject){
    console.log(`usernmae is ${anyobject.username} and price is ${anyobject.price}` );
    

}

// handleObject({
//     username: "Usman khan",
//     price: 399
// })


const myNewArray = [200, 300, 400, 600];

function returnSecondValue (getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 600]));

