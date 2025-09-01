let hero: string;

function getHero(){
    return "Iron man"
}

hero = getHero();

console.log(hero);


function addTwo(num: number){
    return num + 2
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){

}

let logInUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwo(5);
getUpper("john");

signUpUser("John", "john@gmail.ph", false);
logInUser("John", "john@gmail.ph");

export{}