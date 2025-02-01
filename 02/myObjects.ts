type User = {
    readonly _id : string;
    name: string;
    age: number;
    email: string;
    creditCard?: number;
}




const user: User = {
    _id: '1234',
    name: 'John',
    age: 30,
    email: 'johndoe@gmail.com'
}

user.email = "doejohn@gmail.com";