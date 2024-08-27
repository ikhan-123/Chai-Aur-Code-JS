// const tinderUser = new object()
const tinderUser = {}

tinderUser.id = "abc123"
tinderUser.name = "Iffi"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regullarUser = {
    email: "Some@gmail.com",
    fullname: {
        userfullanme: {
            firstname: "Irfan",
            lastname: "khan"
        }
    }
}

// console.log(regullarUser.fullname.userfullanme.firstname);


const obj1 = { 1: "A", 2: "B" }
const obj2 = { 3: "C", 4: "D" }
const obj3 = { 5: "E", 6: "F" }

// const obj4 = Object.assign({}, obj1, obj2, obj3);


const obj4 = { ...obj1, ...obj2, ...obj3 }

// console.log(obj4);



const users = [
    {
        id: 1,
        email: "iffi@gmail.com",
    },
    {
        id: 1,
        email: "iffi@gmail.com",
    },
    {
        id: 1,
        email: "iffi@gmail.com",
    },
    {
        id: 1,
        email: "iffi@gmail.com",
    },
    {
        id: 1,
        email: "iffi@gmail.com",
    }
]


// users[1].email
// console.log(users);

// console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));





