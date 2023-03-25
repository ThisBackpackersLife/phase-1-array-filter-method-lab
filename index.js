// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, string) {
    const newDrivers = drivers.filter(person => person.toLowerCase() === string.toLowerCase());

    return newDrivers;
};

function fuzzyMatch(drivers, string) {
    const newDrivers = drivers.filter(person => person.startsWith(string));
    return newDrivers;
};

// function matchName(drivers, string) {
//     const newDrivers = drivers.filter(driver => driver === string);
//     return newDrivers;
// };

const matchName = (drivers, string) => drivers.filter(person => person.name === string);