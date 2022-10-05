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
}

module.exports = Airport;
