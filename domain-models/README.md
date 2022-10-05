
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
| plane       | id@string                   | -                 | -           |

- Test 3a, if the `planesInAirport[]` is at max capacity, when the `landPlane(plane)` method is called, the length of the array should not increase.
- Test 3b, a string is returned to note the airport is full.

## User story 4:
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

| **OBJECTS** | **PROPERTIES**               | **MESSAGES**     | **OUTPUTS** |
| ----------- | ---------------------------- | ---------------- | ----------- |
| airport     | planesInAirport@array[plane] | @takeOff[@plane] | @bool       |
| plane       | id@string                    | -                | -           |



## User story 5: 
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed 

| **OBJECTS** | **PROPERTIES**               | **MESSAGES**       | **OUTPUTS** |
| ----------- | ---------------------------- | ------------------ | ----------- |
| airport     | planesInAirport@array[plane] | @landPlane[@plane] | @bool       |
| airport     | planesInAirport@array[plane] | @takeOff[@plane]   | @bool       |
| plane       | id@string                    | -                  | -           |

