// Singleton
// object.create

// object Literales

const mySym = Symbol("key1");





const jsUser = {
    name: "irfan",
    "full name": "Irfan Khan",
    [mySym]: "key1",
    age: 18,
    location: "karachi",
    email: "irfan@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Friday"]
}

// console.log(jsUser.email);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySym]);

// Object.freeze(jsUser)
// jsUser.email = "khan07@gmail.com";
// console.log(jsUser.email);
// console.log(jsUser);



// jsUser.greeting = function(){
//     console.log("Hello, I am Irfan");
// }
// console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello, Js user, ${this["full name"]}`);
}
console.log(jsUser.greetingTwo());
