import { lightFormat } from "date-fns";

const prices:(number | string )[] = [4,1,1,9,4,6];
prices.push(1);
prices.push('1');

let user: [string, number, boolean];
// user=['JuanDev', 15];
// user= ['12',15];

// user = [];
// user = ['nico'];
// user =['Emily', 1];
user = ['juan',12, true];

const [username, age ] = user;

console.log(username);
console.log(age);
