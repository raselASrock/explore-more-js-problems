/*
chair -->> 3cft
table -->> 10cft
bed -->> 50cft 

fixed: per item wood quantity
vary: quantity
*/ 


function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;
    const totalWood = chairWood + tableWood + bedWood ;
    return totalWood;
}

const totalWood = woodCalculator(2, 2, 5);
console.log(totalWood);