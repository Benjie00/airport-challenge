class Airport {

  planesInAiport;
  capacity

  constructor(planesInAiport, capacity = 3) {
    this.planesInAiport = [planesInAiport];
    this.capacity = capacity;
  }

  landPlane(plane) {
    this.planesInAiport.push(plane);
    return "Land plane"
  }

  changeCapacity(capacity) {
    return this.capacity = capacity;
  }
}

module.exports = Airport;
