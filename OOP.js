// Class ---doing same thing in prettier way like other languages...
class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
}

getBirthYear() {
    return this.dob.getFullYear();
}

getFullName() {
    return `${this.firstName} ${this.lastName}`;
}

//Instantiate object
person1 = new Person('John','Doe','4/3/1980');
person2 = new Person('Trey','Wads','7/18/1973');

console.log(person2.getFullName())
console.log(person2.getBirthYear())
//.firstName + ' ' + person2.lastName + ' was born in ' + person2.dob)

