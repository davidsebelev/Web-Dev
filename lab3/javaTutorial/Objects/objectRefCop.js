// two objects are equal if they are the same object


let user = {
    name : "David",
};

let permission1 = {
    canView: true,
};
let permission2 = {
    canView: true,
};

Object.assign(user,permission1,permission2);//copy all prop from perm1and2 to user


let user1 = {
    name: 'Alim',
    info: {
        height: 173,
        weight: 78,
    }
};

let clone = Object.assign({},user);

let clone2 = structuredClone(user1);


