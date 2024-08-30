const user ={
    username: "Irfan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
    //  console.log(this);
        
    }

}

// user.welcomeMessage();
// user.username = "Iffi"
// user.welcomeMessage()


// console.log(this);

// function chai (){
//     let username = "Iffi"
//     console.log(this);
    
// }

// chai()

// const chai = function (){
//     let username = "Iffi"
//     console.log(this.username);
    
// }

// chai()

// const chai = ()=>{
//     let username = "IFFI"
//     console.log(this);
    
// }
// chai()

// const addTwo = (num1, num2)=>{
//     return num1 + num2
// }


const addTwo = (num1, num2) => num1 + num2
console.log(addTwo(200, 800));


const addThree = (num1, num2, num3)  => {
    return(
        addTwo + num3
    )
}
console.log(addThree(48, 50, 78));
