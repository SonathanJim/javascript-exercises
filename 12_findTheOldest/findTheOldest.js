const findTheOldest = function(array) {
    array.map(object => (
        array.map(object => Object.keys(object))
        .reduce((objectA, objectB) => (objectB.forEach(propertyZ => objectA.includes(propertyZ) || objectA.push(propertyZ)), objectA))
        .forEach(propertyY => (object[propertyY] = object.hasOwnProperty(propertyY) ? object[propertyY] : new Date().getFullYear())), object)
    );
    array.sort(function(personA, personB) {
        const lastPerson = personA.yearOfDeath - personA.yearOfBirth;
        const nextPerson = personB.yearOfDeath - personB.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
    });
    return array[0];
};
// Do not edit below this line
module.exports = findTheOldest;
