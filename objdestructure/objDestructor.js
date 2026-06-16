let signup ={
    name : "meet",
    email : "xyz@gmail.com",
    number : 1234567809,
    password : 9898,
};
const  {name,email,number,password} = signup;

let signin={
    name : "uday",
    email : "abc@gmail.com",
    number : 9876543210,
    password : 4545,
};
const {name : un, email : ue, number : unm, password : up} = signin;

console.log(`in signup name is ${name}`);
console.log(`in singin name is ${un}`);

console.log(`in signup email is ${email}`);
console.log(`in singin email is ${ue}`);

console.log(`in signup number is ${number}`);
console.log(`in singin number is ${unm}`);

console.log(`in signup password is ${password}`);
console.log(`in singin password is ${up}`);