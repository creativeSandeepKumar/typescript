
const score: Array<number> = [];
const names: Array<number> = [];

function identifyOne(val: boolean | number): boolean | number {
    return val;
}


function identifyTwo(val: any): any{
    return val;
}

function identifyThree<Type>(val: Type): Type{
    return val;
}

function identifyFour<T>(val: T): T{
    return val;
}

interface Bottle {
    brand: string,
    type: number
 }

//  identifyFour<Bottle>({});

 function getSearchProducts<T>(products: T[]): T {
        const myIndex = 3;
        return products[myIndex];
 }

 function getMoreSearchProducts<T>(products: T[]): T {
        const myIndex = 4;
        return products[myIndex];
 }

 interface Database {
    connection: string,
    username: string,
    password: string,
 }

 function anotherFunction<T, U extends Database>(valOne: T, valTwo: U):object {
    return {
        valOne,
        valTwo
    }
}

interface Quiz{
    name: string,
    type: string,
}


interface Course{
    name: string,
    author: string,
    subject: string,
}

class Sellable<T>{
    public cart: T[] = [];

    addToCart(product: T){
        this.cart.push(product);
    }
}