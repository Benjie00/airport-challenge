class Airport {

  planesInAiport;
  capacity

  constructor(planesInAiport, capacity = 3) {
    this.planesInAiport = [];
    this.capacity = capacity;
  }

  landPlane(plane) {
    if (this.isPlaneInAirport(plane)) {
      return;
    }
    if (this.planesInAiport.length === this.capacity) {
      return 'Airport is full, no more planes can land';
    }
    this.planesInAiport.push(plane);
    return "Land plane"
  }

  changeCapacity(capacity) {
    return this.capacity = capacity;
  }

  takeOff(plane) {
    if (!this.isPlaneInAirport(plane)) {
      return 'Cannot take off because plane is not at the aiport';
    }
    let indexOf = this.planesInAiport.indexOf(plane);
    this.planesInAiport.splice(indexOf, 1);
    return 'The plane has taken off';
  }

  isPlaneInAirport(plane) {
    if (this.planesInAiport.includes(plane)) {
      return true;
    }
    return false;
  }

  isFull() {
    if (this.planesInAiport.length >= this.capacity) {
      return true;
    }
    return false;
  }
}

module.exports = Airport;
