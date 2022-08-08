const phones = [
    {name: "samsung", camera: 12, storage: "32gb", price: 36000 , color: "black"},
    {name: "walton", camera: 8, storage: "32gb", price: 22000 , color: "black"},
    {name: "iphone", camera: 8, storage: "32gb", price: 82000 , color: "black"},
    {name: "redmi", camera: 64, storage: "32gb", price: 52000 , color: "black"},
    {name: "oppo", camera: 64, storage: "32gb", price: 20000 , color: "black"},
    {name: "nokia", camera: 64, storage: "32gb", price: 44000 , color: "black"},
    {name: "htc", camera: 64, storage: "32gb", price: 62000 , color: "black"},
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for( i = 0; i < phones.length; i++){
        const phone = phones[i];
        // console.log(phone);
        if( phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);