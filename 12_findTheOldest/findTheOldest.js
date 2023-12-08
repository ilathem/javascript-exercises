const findTheOldest = function(people) {
    return (people.reduce((oldestPerson, currentPerson) => {
        const oldestPersonAge = (oldestPerson.yearOfDeath || new Date().getFullYear()) - oldestPerson.yearOfBirth;
        const currentPersonAge = (currentPerson.yearOfDeath || new Date().getFullYear()) - currentPerson.yearOfBirth;
        if (currentPersonAge > oldestPersonAge) {
            return currentPerson;
        } else {
            return oldestPerson;
        }
    })
    )
};

// Do not edit below this line
module.exports = findTheOldest;
