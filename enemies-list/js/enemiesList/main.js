// Put your code here

console.log("My Enemies List!");
console.log("----------------");

// A function to make and return an array of enemies
const GetEnemies = () => {
    // Make a list of Enemy objects
    const enemies = [
        {
            FirstName: "Joshua",
            LastName: "Flowers",
            Offenses: [
                "Being a jerk to me in elementary school",
                "Not being nice to me in elementary school"
            ],
            IsReallyHated: true
        },
        {
            FirstName: "Darth",
            LastName: "Vader",
            Offenses: [
                "Cut off Luke's hand",
                "Murdered all those kids",
                "Unkind management practices"
            ],
            IsReallyHated: false
        },
        {
            FirstName: "Betty",
            LastName: "Rudelady",
            Offenses: [
                "Phone calls in the theater",
                "Phone calls on the bus",
                "Phone calls in line at the grocery store",
                "Poor conversationalist"
            ],
            IsReallyHated: true
        },
        {
            FirstName: "Leon",
            LastName: "Flowers",
            Offenses: [
                "Keeps giving me a hotplate"
            ],
            IsReallyHated: false
        }
    ];
    return enemies;
};

const enemies = GetEnemies();

// Print out each enemy
enemies.forEach(enemy => {
    if(enemy.IsReallyHated){
        console.log(`${enemy.FirstName} ${enemy.LastName} (Really, really dislike!)`)
    }
    else {
        console.log(`${enemy.FirstName} ${enemy.LastName}`)
    }
});