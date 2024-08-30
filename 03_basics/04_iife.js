// Immediately Invoked Function Expressions (IIFE)


(function chai() {
    // named IIfe
    console.log("Db Conected");  
}) ();  // When you run two or more IIfe run then add a semicolan to end the script.

((name) =>{
    console.log(`DB  ConnectedTwo ${name}`);    
})("Irfan khan")