

function User(id, name, age) {
    this.getId = function() {
        return id;
    };
    this.getName = function() {
        return name;
    };
    this.getAge = function() {
        return age;
    }
}

var users = [
    {id: 1, name: "ID", age: 32},
    {id: 2, name: "HA", age: 25},
    {id: 3, name: "BJ", age: 32},
    {id: 4, name: "PJ", age: 28},
    {id: 5, name: "JE", age: 27},
    {id: 6, name: "JM", age: 32},
    {id: 7, name: "HI", age: 24},
];

var users2 = [
    new User(1, "ID", 32),
    new User(1, "HA", 25),
    new User(1, "BJ", 32),
    new User(1, "PJ", 28),
    new User(1, "JE", 27),
    new User(1, "JM", 32),
    new User(1, "HI", 24)
];

// 다양한 상황에 대응 가능한 함수를 만들 수 있다. 
function find(list, predicate) {
    for(var i=0, len = list.length; i < len; i++) {
        if(predicate(list[i])) return list[i];
    }
}

console.log(find(users2, function(u) {
    return u.getAge() == 25;
}).getName());   
// HA

console.log(find(users, function(u) {
    return u.name.indexOf('P') != -1;
}));   
// {id: 4, name: "PJ", age: 28}

console.log(find(users, function(u) { 
    return u.age == 32 && u.name == 'JM';
}));
// {id: 6, name: "JM", age: 32}

console.log(find(users2, function(u) {
    return u.getAge() < 30;
}).getName());
// HA



