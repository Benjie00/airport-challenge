const { assertEquals } = require("../testing-framework");
const Airport = require('../src/airport')
const Plane = require('../src/plane')

let airport, plane;

//Test 1a - Is the plane instructed to land?
console.log('===============')
console.log('Test 1a: if landPlane() is called, a string is returned to confirm the instruction has been given.')

//arrange
airport = new Airport();
plane = new Plane();
expected = 'Land plane';

//act
actual = airport.landPlane(plane);

//assert
result = assertEquals(actual, expected);
console.log(`The plane has been instructed to land: ${result}`);

// Clean up 
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

///////////////////////////////////////////

//Test 1b - Does the plane land at airport?
console.log('===============')
console.log('Test 1b: if landPlane() is called, the length of planesInAirport[] array increases.')

//arrange
airport = new Airport();
plane = new Plane();
expected = 1;

//act
actual = airport.planesInAiport.length;

//assert
result = assertEquals(actual, expected);
console.log(`The plane has landed and is stored in the aiport: ${result}`);

// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;
