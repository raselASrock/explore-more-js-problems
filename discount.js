/*
1. if ticket number is less than 100, per ticket price: 100 tk;
2. if ticket number is more than 100 but less than 200, first 100 tickets will be 100 tk, rest tickets will be 90 taka per piece.
3. if you purchase more than 200 tickets
first 100 ticket -->> 100 taka
101-200 ticket -->> 90 taka
200+ --> 70 taka
*/ 


function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if( ticketQuantity<= 100){
        const price  = ticketQuantity * first100Rate ;
        return price;
    }
    else if( ticketQuantity <= 200){
        const first100Price = 100 * first100Rate ;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100* second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketRate = restTicketQuantity * restTicketRate ;
        const totalPrice = first100Price + second100Price + restTicketPrice;
        return totalCost; 
    }
}
const price = ticketPrice(235);
console.log("price: ", price);