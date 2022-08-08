const country = "Bangladesh";
const age = 52;
const isIndependent = true;
const student = {id: 121, class: 11, name: "Agun"};
const friends = [14, 13, 11, 17, 22, 16, 20, 15];
function add (num1, num2){
    return num1 + num2;
}
// ********************************
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(typeof friends);
console.log(typeof add);

// **************Arrey ****** Includes******** Concat********

console.log(Array.isArray(friends));
console.log(friends.includes(11));

const newFriends = [45, 72, 35, 67, 11, 53];
const allFriends = newFriends.concat(friends);
console.log(allFriends) ;