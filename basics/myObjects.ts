
// const User = {
//     name: "hitesh",
//     email: "hitesh@lo.dev",
//     isActive: true,
// }

// function createUser({name: string, isPaid: boolean}){};

// let newUser = {name:"hitesh", isPaid:true, email: "h@h.com"};

// createUser(newUser);

// function createCourse():{name: string, price: number}{
//     return {name: "reactJs", price: 399};
// }

// type User = {
//     name: string;
//     email: string;
//     isActive:  boolean;
// }

// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name:"", email:"", isActive: true});

type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credcardDetails?: number;
}


let myUser: User = {
    _id: "1234",
    name: "h",
    email: "h@h.com",
    isActive: false,
}

type cardNumber = {
    cardNumber: string;
}

type cardDate = {
    cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number;
}

myUser.email = "h@gmail.com";
// myUser._id = "asa";

export {}


