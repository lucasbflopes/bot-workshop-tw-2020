class BeerRepository {
  constructor(beers) {
    this.beers = beers || [];
  }

  getAll() {
    return this.beers
  }
}

module.exports = BeerRepository;