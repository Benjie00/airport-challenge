const { assertEquals } = require("../testing-framework");
const Airport = require('../src/airport');
const Plane = require('../src/plane');

let airport, plane, plane1;

//Test 1a
console.log('===============')
console.log('Test 1a: when landPlane(plane) is called, a string is returned to confirm the instruction to land has been given.')

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

//Test 1b
console.log('===============');
console.log('Test 1b: when landPlane(plane) is called, expect the length of planesInAirport[] array to increase to 1.');

//arrange
airport = new Airport();
plane = new Plane();
expected = 1;

//act
airport.landPlane(plane);
actual = airport.planesInAirport.length;

//assert
result = assertEquals(actual, expected);
console.log(`The plane has landed and is stored in the airport: ${result}`);

// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

///////////////////////////////////////////

//Test 2a: 
console.log('===============');
console.log('Test 2a: expect the default value of airport.capacity to equal 3.');

//arrange
airport = new Airport();
plane = new Plane();
expected = 3;

//act
actual = airport.capacity;

//assert
result = assertEquals(actual, expected);
console.log(`The airport has a default capacity of 3: ${result}`);

// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

///////////////////////////////////////////

//Test 2b:
console.log('===============');
console.log('Test 2b: call changeCapacity(5), expect the capacity to have changed to 5.');

//arrange
airport = new Airport();
plane = new Plane();
expected = 5;

//act
airport.changeCapacity(5);
actual = airport.capacity;

//assert
result = assertEquals(actual, expected);
console.log(`The capcity was set to 5: ${result}`);

// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

///////////////////////////////////////////

//Test 3a:
console.log('===============');
console.log('Test 3a: the isFull() method returns true if the airport is at maximum capacity.');

//arrange
airport = new Airport();
plane = new Plane();
expected = true;

//act
airport.planesInAirport.length = 4;
actual = airport.isFull();

//assert
result = assertEquals(actual, expected);
console.log(`The airport is full: ${result}`);

// Clean up 
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

///////////////////////////////////////////


//Test 3b:
console.log('===============');
console.log('Test 3b: the isFull() method returns false if the airport is not at maximum capacity.');

//arrange
airport = new Airport();
plane = new Plane();
expected = false;

//act
airport.planesInAirport.length = 0;
actual = airport.isFull();

//assert
result = assertEquals(actual, expected);
console.log(`The airport is not full: ${result}`);

// Clean up 
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

///////////////////////////////////////////

//Test 3c:
console.log('===============');
console.log('Test 3c: if planesInAirport[] is at maximum capacity, when landPlane(plane) is called, expect the length of the array to not change.');

//arrange
airport = new Airport();
plane = new Plane();
expected = airport.capacity;

//act
airport.planesInAirport.length = airport.capacity;
airport.landPlane(plane);
actual = airport.planesInAirport.length;

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

//Test 3d:
console.log('===============');
console.log('Test 3d: when landPlane(plane) is called whilst planesInAirport[] is at maximum capacity, a string is returned to note the airport is full.');

//arrange
airport = new Airport();
plane = new Plane();
expected = 'Airport is full, no more planes can land';

//act
airport.planesInAirport.length = airport.capacity;
actual = airport.landPlane(plane);

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

//Test 4a:
console.log('===============');
console.log('Test 4a: When plane is stored in the airport and the takeOff(plane) method is called, expect the length of the planesInAirport[] array to decrease from 1 to 0.');

//arrange
airport = new Airport();
plane = new Plane();
expected = 0;

//act
airport.landPlane(plane);
airport.takeOff(plane);
actual = airport.planesInAirport.length;

//assert
result = assertEquals(actual, expected);
console.log(`The plane left the airport: ${result}`);

// Clean up 
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

///////////////////////////////////////////

//Test 4b: 
console.log('===============');
console.log('Test 4b: When takeOff() is called, a string will be returned to confirm the plane has taken-off.');

//arrange
airport = new Airport();
plane = new Plane();
expected = 'The plane has taken off';

//act
airport.landPlane(plane);
actual = airport.takeOff(plane);

//assert
result = assertEquals(actual, expected);
console.log(`A string is returned to confirm take-off: ${result}`);

// Clean up 
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

///////////////////////////////////////////

//Test 5a:
console.log('===============');
console.log('Test 5a: the isPlaneInAirport(plane) method returns true if plane is already present in the airport.');

//arrange
airport = new Airport();
plane = new Plane();
expected = true;

//act
airport.landPlane(plane);
actual = airport.isPlaneInAirport(plane);

//assert
result = assertEquals(actual, expected);
console.log(`The plane was already at the airport: ${result}`);

// Clean up 
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

///////////////////////////////////////////

//Test 5b: 
console.log('===============');
console.log('Test 5b, when the takeOff() method is called on a plane that is not included in planesInAirport[], expect the length of array not to change.');

//arrange
airport = new Airport();
plane = new Plane();
plane1 = new Plane();
expected = 1;

//act
airport.landPlane(plane1);
airport.takeOff(plane);
actual = airport.planesInAirport.length;

//assert
result = assertEquals(actual, expected);
console.log(`No planes left the airport: ${result}`);

// Clean up 
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

///////////////////////////////////////////

//Test 5c: 
console.log('===============');
console.log('Test 5c: when takeOff(plane) is called whilst plane is not in planesInAirport[], a string should be returned to inform the user that the plane cannot take-off because it is not at the airport.');

//arrange
airport = new Airport();
plane = new Plane();
expected = 'Cannot take-off because plane is not at the airport';

//act
actual = airport.takeOff(plane);

//assert
result = assertEquals(actual, expected);
console.log(`A string is returned when a plane not in the airport tries to take-off: ${result}`);

// Clean up 
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

///////////////////////////////////////////

//Test 5d:
console.log('===============');
console.log('Test 5d: expect isPlaneInAirport(plane) to return false when plane is not already present in planesInAirport[].');

//arrange
airport = new Airport();
plane = new Plane();
expected = false;

//act
actual = airport.isPlaneInAirport(plane);

//assert
result = assertEquals(actual, expected);
console.log(`The plane was not already at the airport: ${result}`);

// Clean up 
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

///////////////////////////////////////////

//Test 5e: 
console.log('===============');
console.log('Test 5e: if the landPlane() method has been called on a plane already in planesInAirport[] array, the length of the array should not increase.')

//arrange
airport = new Airport();
plane = new Plane();
expected = 1;

//act
airport.landPlane(plane)
airport.landPlane(plane)
actual = airport.planesInAirport.length

//assert
result = assertEquals(actual, expected);
console.log(`The number of planes at the airport did not increase: ${result}`);

// Clean up 
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

///////////////////////////////////////////

//Test 5f:
console.log('===============');
console.log('Test 5f: When plane is in planesInAirport[] array and landPlane(plane) is called, a string will be returned to show a plane is already in the airport and cannot land.');

//arrange
airport = new Airport();
plane = new Plane();
expected = 'The plane is already in airport, it cannot land again';

//act
airport.landPlane(plane);
actual = airport.landPlane(plane);

//assert
result = assertEquals(actual, expected);
console.log(`A string was returned when the plane to land was already at the airport: ${result}`);

// Clean up 
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

///////////////////////////////////////////