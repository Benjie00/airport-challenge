class Airport {

  planesInAiport;
  capacity

  constructor(planesInAiport, capacity = 3) {
    this.planesInAiport = [];
    this.capacity = capacity;
  }

  landPlane(plane) {

    if (this.planesInAiport.length === this.capacity) {
      return 'Airport is full, no more planes can land';
    }

    this.planesInAiport.push(plane);
    return "Land plane"
  }

  changeCapacity(capacity) {
    return this.capacity = capacity;
  }
}

module.exports = Airport;
