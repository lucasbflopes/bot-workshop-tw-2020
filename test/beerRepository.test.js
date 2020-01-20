const BeerRepository = require('../src/repositories/beerRepository');

describe('BeerRepository', () => {
  const beers = [
    { name: "foo" },
    { name: "bar" }
  ];
  const repository = new BeerRepository(beers);

  describe("getAll", () => {
    it('should return all beers', () => {
      expect(repository.getAll()).toBe(beers);
    });
  })
});
