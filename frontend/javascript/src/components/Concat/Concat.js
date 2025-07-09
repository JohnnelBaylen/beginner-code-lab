const ArrOne = [1, 2, 3, 4, 5];
const ArrTwo = [5, 10, 15, 20, 25];
const ArrThree = [10, 20, 30, 40, 50];

const MergedArray = ArrOne.concat(ArrTwo, ArrThree);

console.log(MergedArray);
console.log("")

let PROGRAMMING_LANGUAGE = [
    "JavaScript",
    "PHP", 
    "Java", 
    "Python", 
    "Go/Golang", 
    "NodeJs"
];

let PROGRAMMING_LANGUAGE_YEAR_CREATED = [
    1995, 
    1995,
    1995, 
    1991, 
    2009, 
    2009
];

let CREATORS = [
    "Brendan Eich",      
    "Rasmus Lerdorf",    
    "James Gosling",   
    "Guido van Rossum",  
    "Robert Griesemer, Rob Pike, Ken Thompson", 
    "Ryan Dahl"          
];

let COMBINE_All = PROGRAMMING_LANGUAGE.concat(PROGRAMMING_LANGUAGE_YEAR_CREATED, CREATORS);

console.log(COMBINE_All);