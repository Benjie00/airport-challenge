class Airport {
  // here's a starting point for you
  planesInAiport;


  constructor(planesInAiport) {
    this.planesInAiport = [planesInAiport];
  }

  landPlane(plane) {
    this.planesInAiport.push(plane);
    return "Land plane"
  }
}

module.exports = Airport;
