
// Object
const person = {

    firstName: "John",
    lastName: "Doe",
    age: 19,

    location: {
        region: "NCR",
        city: "Maynila"
    },

    // Method
    locationNotFound: function(){
        console.log("Not Found");
    },

    locationFound: function(city) {
       if (this.location.city === city){
            console.log("Location Found");
       } else {
            this.locationNotFound();
       } 
    }
    
}

person.locationFound("Cebu");
person.locationFound("Maynila");



// Factory Function
function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log("Draw a circle");
        }
    };
}

// Constructor Function
const circle = createCircle(1);

function Circle(radius){

    console.log('this', this);

    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const another = new Circle(1);
