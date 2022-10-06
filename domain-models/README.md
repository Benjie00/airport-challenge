
# Domain Models

## User story 1: 
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

| **OBJECTS** | **PROPERTIES**               | **MESSAGES**      | **OUTPUTS** |
| ----------- | ---------------------------- | ----------------- | ----------- |
| airport     | planesInAirport@array[plane] | landPlane(@plane) | @string     |
| plane       | id@string                    | -                 | -           |

- Test 1a if  `landPlane()` is called, a string is returned to confirm the instruction has been given. 
- Test 1b if `landPlane()` is called, the length of `planesInAirport[]` array increases. 

## User story 2 
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

| **OBJECTS** | **PROPERTIES**      | **MESSAGES**                          | **OUTPUTS** |
| ----------- | ------------------- | ------------------------------------- | ----------- |
| airport     | capacity@number = 3 | @changeCapacityTo(newCapacity@number) | @void       |

- Test 2a, check the value of `airport.capacity` to see if the default is size is 3. 
- Test 2b, call the `changeCapacity()` method and check if the capcity has changed. 
  
## User story 3:
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full


| **OBJECTS** | **PROPERTIES**              | **MESSAGES**      | **OUTPUTS** |
| ----------- | --------------------------- | ----------------- | ----------- |
| airport     | capacity@number = 3         | -                 | -           |
| airport     | planesIAirport@array[plane] | landPlane(@plane) | @string     |
| airport     | -                           | isFull()          | @bool       |
| plane       | id@string                   | -                 | -           |

- Test 3a, the `isFull()` method returns true if the aiport is at max capacity.
- Test 3b, the `isFull()` method returns false if the airport is not at max capacity.
- Test 3c, if the `planesInAirport[]` is at max capacity, when the `landPlane(plane)` method is called, the length of the array should not increase.
- Test 3d, a string is returned to note the airport is full.

## User story 4:
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

| **OBJECTS** | **PROPERTIES**               | **MESSAGES**     | **OUTPUTS** |
| ----------- | ---------------------------- | ---------------- | ----------- |
| airport     | planesInAirport@array[plane] | @takeOff[@plane] | @string     |
| plane       | id@string                    | -                | -           |

- Test 4a, if 1 plane is stored at the airport and the `takeOff(plane)` method is called, the length of the `planesInAirport[]` array will decrease by 1. 
- Test 4b, a string will be returned to confirm the plane has taken off.


## User story 5: 
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed 

| **OBJECTS** | **PROPERTIES**               | **MESSAGES**             | **OUTPUTS** |
| ----------- | ---------------------------- | ------------------------ | ----------- |
| airport     | planesInAirport@array[plane] | @landPlane[@plane]       | @string     |
| airport     | planesInAirport@array[plane] | @takeOff[@plane]         | @string     |
| airport     | -                            | isPlaneAtAirport(@plane) | @void       |
| plane       | id@string                    | -                        | -           | - |

- **Test 5a**, the `isPlaneInAirport(plane)` method returns `true` if the `plane` is already present in the airport.
- **Test 5b**, if the `takeOff()` method is called on a `plane` that is not included in `planesInAirport`, the length of the array will not change. 
- **Test 5c**, a string should be returned to inform the user that the `plane` cannot takeoff if it is not in the airport when the `takeOff()` method is called. 
- **Test 5d**, the `isPlaneInAirport(plane)` method returns `false` if the `plane` is not already present in the airport.
- **Test 5e**, if the `landPlane()` method has been called on a plane already in  `planesInAirport[]` array, the **length** of the array should not increase.
- **Test 5f**, a **string** will be returned to show a plane is already in the airport and cannot land.
