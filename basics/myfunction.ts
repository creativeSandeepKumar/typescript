
function addTwo(num: number): number{
    return num + 2;
}

function getUpper(val: string){
    return val.toUpperCase();
}

function loginUser(name: string, email: string, isPaid: boolean = false) => {};

let myValue = addTwo(5);
getUpper("hitesh");
signUpUser("hitesh", "hitesh@1co.dev", false);
loginUser("h", "h@h.com");

function getValue(myVal: number): boolean{
    if(myVal > 5){
        return true;
    }
    return false;
    // return "200 Ok"
}

const getHello = (s: string): string => {
    return "";
}

const heroes = ["thor", "spiderman", "ironman"];

heroes.map((hero) => string => {
    return `hero is ${string}`;
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleErr(errmsg: string): never{
    throw new Error(errmsg);
}


export {};