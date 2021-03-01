// Put your code here

console.log("Do you believe in magic?");
console.log("------------------------");

const allSpells = [
    {
        name: "Turn enemy into a newt",
        isEvil: true,
        energyRequired: 5.1
    },
    {
        name: "Conjure some gold for a local charity",
        isEvil: false,
        energyRequired: 2.99
    },
    {
        name: "Give a deaf person the ability to heal",
        isEvil: false,
        energyRequired: 12.2
    },
    {
        name: "Make yourself emperor of the universe",
        isEvil: true,
        energyRequired: 100.0
    },
    {
        name: "Convince your relatives your political views are correct",
        isEvil: false,
        energyRequired: 2921.5
    }
];

const SpellBook = () => {
    return {
        title: "",
        spells: []
    };
};

const makeEvilSpellBook = () => {
    const evilBook = SpellBook()
    evilBook.title = "Evil Book";
    evilBook.spells = allSpells.filter(spell => spell.isEvil === true);

    return evilBook;
}

const makeGoodSpellBook = () => {
    const goodBook = SpellBook()
    goodBook.title = "Good Book";
    goodBook.spells = allSpells.filter(spell => spell.isEvil !== true);

    return goodBook;
}

const evilBook = makeEvilSpellBook();
const goodBook = makeGoodSpellBook();

const displaySpellBook = (book) => {
    console.log(book.title);
    book.spells.forEach(spell => console.log(`  ${spell.name}`))
};

displaySpellBook(goodBook);
console.log();
displaySpellBook(evilBook);