const { assertEquals } = require("../testing-framework");
const Airport = require('../src/airport')
const Plane = require('../src/plane')

let airport, plane, plane1;

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
airport.landPlane(plane)
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

///////////////////////////////////////////

//Test 2a - Does the airport have a default capcity?
console.log('===============')
console.log('Test 2a: check the value of airport.capacity to see if the default is size is 3.')

//arrange
airport = new Airport();
plane = new Plane();
expected = 3;

//act
actual = airport.capacity;

//assert
result = assertEquals(actual, expected);
console.log(`Does the airport have a default capcity of 3: ${result}`);

// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

///////////////////////////////////////////

//Test 2b - Does changeCapcity method revise the capcity?
console.log('===============')
console.log('Test 2b: call the changeCapacity() method and check if the capcity has changed.')

//arrange
airport = new Airport();
plane = new Plane();
expected = 5;

//act
airport.changeCapacity(5);
actual = airport.capacity;

//assert
result = assertEquals(actual, expected);
console.log(`Does calling the changeCapacity() method revise the capcity: ${result}`);

// Clean up
airport = null
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

//Test 3a - When the airport is full, are planes stopped from landing at the airport?
console.log('===============')
console.log('Test 3a, if the planesInAirport[] is at max capacity, when the landPlane(plane) method is called, the length of the array should not increase.')

//arrange
airport = new Airport();
plane = new Plane();
expected = 3;

//act
airport.landPlane(plane);
airport.landPlane(plane);
airport.landPlane(plane);
airport.landPlane(plane);
airport.landPlane(plane);
actual = airport.planesInAiport.length

//assert
result = assertEquals(actual, expected);
console.log(`When the airport is full, planes cannot land: ${result}`);

// Clean up 
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

///////////////////////////////////////////

//Test 3b - When the airport is full, is a string returned to alert that the airport is full?
console.log('===============')
console.log('Test 3b: a string is returned to note the airport is full')

//arrange
airport = new Airport();
plane = new Plane();
expected = 'Airport is full, no more planes can land';

//act
airport.landPlane(plane);
airport.landPlane(plane);
airport.landPlane(plane);
actual = airport.landPlane(plane)

//assert
result = assertEquals(actual, expected);
console.log(`When the airport is full, a string is returned when a plane tries to land: ${result}`);

// Clean up 
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

///////////////////////////////////////////

//Test 4a - Testing if the length of the planesInAirport Array decreases once a plane has taken off?
console.log('===============')
console.log('Test 4a: if the takeOff(plane) method is called, the length of the planesInAirport[] array will decrease by 1.')

//arrange
airport = new Airport();
plane = new Plane();
expected = 0;

//act
airport.landPlane(plane);
airport.takeOff(plane);
actual = airport.planesInAiport.length;

//assert
result = assertEquals(actual, expected);
console.log(`1 plane is stored at the airport, when it leaves 0 planes are at the aiport: ${result}`)

// Clean up 
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

///////////////////////////////////////////

//Test 4b: when the plane takes off is a string returned?
console.log('===============')
console.log('Test 4b: a string will be returned to confirm the plane has taken off.')

//arrange
airport = new Airport();
plane = new Plane();
expected = 'The plane has taken off';

//act
airport.landPlane(plane);
actual = airport.takeOff(plane);

//assert
result = assertEquals(actual, expected);
console.log(`A string is returned to confirm take off: ${result}`)

// Clean up 
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

///////////////////////////////////////////

//Test 5a: is the plane in the airport?
console.log('===============')
console.log('Test 5a: does the isPlaneInAirport(plane) method returns true if the plane is already in the airport.')

//arrange
airport = new Airport();
plane = new Plane();
expected = true;

//act
airport.landPlane(plane)
actual = airport.isPlaneInAirport(plane);

//assert
result = assertEquals(actual, expected);
console.log(`The plane was already at the airprot: ${result}`)

// Clean up 
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

///////////////////////////////////////////

//Test 5b: are planes that are not in the airport, prevented from taking off?
console.log('===============')
console.log('Test 5b: if the `takeOff()` method is called on a `plane` that is not included in `planesInAirport`, the length of the array will not change.')

//arrange
airport = new Airport();
plane = new Plane();
plane1 = new Plane();
expected = 1;

//act
airport.landPlane(plane1)
airport.takeOff(plane);
actual = airport.planesInAiport.length;

//assert
result = assertEquals(actual, expected);
console.log(`No planes left the airport: ${result}`)

// Clean up 
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

///////////////////////////////////////////