var stuff = require('https')
var fs = require('fs')


var Person = function (name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var asintha = new Person('asintha');
var james = new Person('james');
var george = new Person('george');

var people = [asintha, james, george];

people.forEach(function(person) {
    person.on('speak', function(msg) {
        console.log(`${person.name} said ${msg}`);
    });
});


asintha.emit('speak', 'mbambande fada');
james.emit('speak', 'indedi fada');


counter = stuff.counter;

console.log(counter(['a','b','c','d']))