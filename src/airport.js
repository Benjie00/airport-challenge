class Airport {

  planesInAirport;
  capacity;

  constructor(planesInAirport, capacity = 3) {
    this.planesInAirport = [];
    this.capacity = capacity;
  }

  landPlane(plane) {
    if (this.isFull()) {
      return 'Airport is full, no more planes can land';
    }
    if (this.isPlaneInAirport(plane)) {
      return 'The plane is already in airport, it cannot land again';
    }
    this.planesInAirport.push(plane);
    return "Land plane"
  }

  changeCapacity(capacity) {
    return this.capacity = capacity;
  }

  takeOff(plane) {
    if (!this.isPlaneInAirport(plane)) {
      return 'Cannot take off because plane is not at the airport';
    }
    let indexOf = this.planesInAirport.indexOf(plane);
    this.planesInAirport.splice(indexOf, 1);
    return 'The plane has taken off';
  }

  isPlaneInAirport(plane) {
    if (this.planesInAirport.includes(plane)) {
      return true;
    }
    return false;
  }

  isFull() {
    if (this.planesInAirport.length >= this.capacity) {
      return true;
    }
    return false;
  }
}

module.exports = Airport;
