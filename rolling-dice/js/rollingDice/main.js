// Put your code here

console.log("Let's roll some dice, baby!");
console.log("---------------------------");

// Function for "rolling" a die
// Generates a random number between 1 - 6
// Constructs a new Die object with the random number as its value
const Roll = () => {
    dieValue = Math.ceil(Math.random()*6);
    const die = new Die(dieValue);
    return die;
};

// Create a class to define a "die" object
// Each die will have a value. This value is the number that the
// die "landed on" when it was rolled.
class Die {
    constructor(value){
        this.dieValue = value;
        this.dieImage = this.determineImage();
    };

    determineImage() {
        // Default value for die image
        let dieString = "Unknown";
        
        // Converts the die value into its related image
        switch(this.dieValue) {
            case 1:
                dieString = "\u2680"; 
                break;
            case 2:
                dieString = "\u2681";
                break;
            case 3:
                dieString = "\u2682";
                break;
            case 4:
                dieString = "\u2683";
                break;
            case 5:
                dieString = "\u2684";
                break;
            case 6:
                dieString = "\u2685";
                break;
        }
        return dieString;
    };
};

// Roll the dice 10 times and add an extra message if
// both dice are the same value
for (let i=0; i < 10; i++){
    let die1 = Roll();
    let die2 = Roll();
    let totalValue = die1.dieValue + die2.dieValue
    let message = `${die1.dieImage} + ${die2.dieImage} == ${totalValue}`;

    if (die1.dieValue == die2.dieValue){
        message += " DOUBLES!";
    };
    console.log(message)
};