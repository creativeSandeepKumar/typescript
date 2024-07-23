

interface User {
    readonly dbId: number;
    email: string;
    userId: string;
    googleId?: string;
    startTrail(): string;
    getCoupon(couponname: string, value: number):number
}

interface User {
    githubtoken: string;
}

interface Admin extends User {
    role: "admin" | "ts" | "learner";
}

const hitesh: Admin = {dbId: 22, email: "h@h.com",
    userId: 2211,
    role: "admin",
    githubtoken: "github",
    startTrail: () => {
        return 'trail started'
    },

    getCoupon: (name: "hitesh10", off: 10) => {
        return 10;
    }
}

hitesh.email = "h@h.com";