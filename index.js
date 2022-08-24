// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(array, string) {
    const names = array.filter(name => name.toLowerCase() === string.toLowerCase());
    return names;
}

findMatching(drivers, "Sally");

function fuzzyMatch(array, string) {
    const driverList = array.filter(name => name.charAt() === string.charAt());
    return driverList;
}

function matchName(driver, string) {
    const match = driver.filter(details => details.name === string);
    return match;
}