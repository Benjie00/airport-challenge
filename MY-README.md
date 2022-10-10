# The Airport Challenge | 1st Challenge

  - [About](#about)
    - [Methodology](#methodology)
  - [Getting Started](#getting-started)
    - [Prerequisites:](#prerequisites)
    - [Installation:](#installation)
    - [Project Stucture:](#project-stucture)
  - [Problem Statements](#problem-statements)
    - [**User Story 1:**](#user-story-1)
    - [**User Story 2:**](#user-story-2)
    - [**User Story 3:**](#user-story-3)
    - [**User Story 4:**](#user-story-4)
    - [**User Story 5:**](#user-story-5)
  - [Project Review](#project-review)
    - [Main Takeaways:](#main-takeaways)
    - [Future ideas:](#future-ideas)

## About
**Date of completion: 09/10/2022**

This project is designed to develop skills in Test-Driven Developement (TTD). It tests someones ability to create user stories and tranform them into domain models. Additionally, it challenges someones ability to make a suitable testing-framework, develop tests, and write the code required to pass each test in an Object-Orientated Programming (OOP) style.  

### Methodology

1. User stories were converted to domain models and a series of tests.
2. A simple testing-framework was developed using `assertEquals()` to compare the equallity of two arguments: `expected` and `actual`. If both values are equal, given that they have the same data type, the function will return `true`. If they are different, it will return `false`.
3. For each individual test, `expected` and `actual` were set equal to the test's expected and actual results, respectively. 
4. The test was ran and subsequently failed.
5. The code was written to pass the test. 

## Getting Started

### Prerequisites:
- [NodeJs](https://nodejs.org/en/)
  
### Installation:
1. Clone the repository
   ```
   git clone https://github.com/Benjie00/airport-challenge
   ```
2. Enter `test` directory 
   ``` 
   cd test 
   ```
3. Run tests
   ```
   node airport.spec.js
   ```
### Project Stucture:

- `testing-frame.js` is the testing framework. 
- Spec/test files are located in `test` directory.
- Classes are located in `src` directory.

## Problem Statements

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take-off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take-off. Here are the user stories that we worked out in collaboration with the client:

### **User Story 1:**
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```



| **OBJECTS** | **PROPERTIES**               | **MESSAGES**      | **OUTPUTS** |
| ----------- | ---------------------------- | ----------------- | ----------- |
| airport     | planesInAirport@array[plane] | landPlane(@plane) | @string     |
| plane       | id@string                    | -                 | -           |

- **Test 1a:** when  `landPlane(plane)` is called, a **string** is returned to confirm the instruction to land has been given. 
- **Test 1b:** when `landPlane(plane)` is called, expect the **length** of `planesInAirport[]` array to increase to 1. 

### **User Story 2:**
```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

| **OBJECTS** | **PROPERTIES**      | **MESSAGES**                          | **OUTPUTS** |
| ----------- | ------------------- | ------------------------------------- | ----------- |
| airport     | capacity@number = 3 | @changeCapacityTo(newCapacity@number) | @void       |

- **Test 2a:** expect the default value of `airport.capacity` to equal 3.
- **Test 2b:** call `changeCapacity(5)`, expect the capacity to have changed to 5. 
  
### **User Story 3:**
```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

| **OBJECTS** | **PROPERTIES**               | **MESSAGES**      | **OUTPUTS** |
| ----------- | ---------------------------- | ----------------- | ----------- |
| airport     | capacity@number = 3          | -                 | -           |
| airport     | planesInAirport@array[plane] | landPlane(@plane) | @string     |
| airport     | -                            | isFull()          | @bool       |
| plane       | id@string                    | -                 | -           |

- **Test 3a:** the `isFull()` method returns `true` if the airport is at maximum capacity.
- **Test 3b:** the `isFull()` method returns `false` if the airport is not at maximum capacity.
- **Test 3c:** if  `planesInAirport[]` is at maximum capacity, when  `landPlane(plane)` is called, expect the **length** of the array to not change.
- **Test 3d:** when `landPlane(plane)` is called whilst `planesInAirport[]` is at maximum capacity, a **string** is returned to note the airport is full.

### **User Story 4:**
```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take-off and confirm that it is no longer in the airport
```

| **OBJECTS** | **PROPERTIES**               | **MESSAGES**     | **OUTPUTS** |
| ----------- | ---------------------------- | ---------------- | ----------- |
| airport     | planesInAirport@array[plane] | @takeOff[@plane] | @string     |
| plane       | id@string                    | -                | -           |

- **Test 4a:** When `plane` is stored in the airport and the `takeOff(plane)` method is called, expect the length of the `planesInAirport[]` array to decrease from 1 to 0. 
- **Test 4b:** When `takeOff()` is called, a **string** will be returned to confirm the plane has taken-off.


### **User Story 5:** 
```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed 
```

| **OBJECTS** | **PROPERTIES**               | **MESSAGES**             | **OUTPUTS** |
| ----------- | ---------------------------- | ------------------------ | ----------- |
| airport     | planesInAirport@array[plane] | @landPlane[@plane]       | @string     |
| airport     | planesInAirport@array[plane] | @takeOff[@plane]         | @string     |
| airport     | -                            | isPlaneAtAirport(@plane) | @void       |
| plane       | id@string                    | -                        | -           | - |

- **Test 5a:** the `isPlaneInAirport(plane)` method returns `true` if  `plane` is already present in the airport.
- **Test 5b**, when the `takeOff()` method is called on a `plane` that is not included in `planesInAirport[]`, expect the **length** of array  not to change. 
- **Test 5c:** when `takeOff(plane)` is called whilst `plane` is not in `planesInAirport[]`, a **string** should be returned to inform the user that the `plane` cannot take-off because it is not at the airport. 
- **Test 5d:**  expect `isPlaneInAirport(plane)` to return `false` when  `plane` is not already present in  `planesInAirport[]`.
- **Test 5e:** if the `landPlane()` method has been called on a plane already in  `planesInAirport[]` array, the **length** of the array should not increase.
- **Test 5f:** When `plane` is in `planesInAirport[]` array and `landPlane(plane)` is called, a **string** will be returned to show a plane is already in the airport and cannot land.


## Project Review

### Main Takeaways:
- That TDD can be used to programme more concisely and objectively.
- How to develop testing-framework to effectively test code.
- Basics of OOP (classes, singularity).

### Future ideas:
- Use Jasmine testing-framework.
- Loosely couple classes.
- Implement mock-variables.
- Make more use of git for experimental ideas. 
- Monitor ticket sales and passenger information, making sure flights are not over-booked and seats are assigned to specific passengers. Implelement this by making `Ticket` and `Passenger` classes. 
- Expand the `Airport` class to support different locations by adding a `location` property.
- Track flights and keep a log of flight history by adding a `FlightPlan` class and including a field to record which `Plane` was added to it.  
- Improve flight saftey by only allowing flights to take off at certain times, allowing time intervals between each takeOff/landing. This could be done by inputting the information recorded by a flight/landing log into a new method that decides whether it is safe for another flight to take-off/land. 
  




