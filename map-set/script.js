function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const users = new Map();

users.set('Gabrel', 'Admin');
users.set('Bruna', 'Admin');
users.set('Caio', 'User');
users.set('Isadora', 'Admin');
users.set('Francisco', 'User');

console.log(getAdmins(users));

// -------------------------------------------------- //

const myArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function uniqueValue(array) {
    const mySet = new Set(array);

    return [...mySet];
}

console.log(uniqueValue(myArray));