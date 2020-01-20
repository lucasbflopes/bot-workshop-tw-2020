const BeerScoreService = require('../src/services/beerScoreService');
const { INTENSITY } = require('../src/constants');

describe('BeerScoreService', () => {

  describe("kindScore", () => {
    it('should return 2 if kind is the same', () => {
      const service = new BeerScoreService({kind: "foo"});

      expect(service.kindScore("foo")).toBe(2);
    });

    it('should return 0 if kind is not the same', () => {
      const service = new BeerScoreService({ kind: "foo" });

      expect(service.kindScore("foo2")).toBe(0);
    });
  })

  describe("dishScore", () => {
    it('should return 1 if beer harmonization contains dish', () => {
      const service = new BeerScoreService({ harmonization: "foo, bar" });

      expect(service.dishScore("foo")).toBe(1);
    });

    it('should return 0 if beer harmonization does not contain dish', () => {
      const service = new BeerScoreService({ harmonization: "foo, bar" });

      expect(service.dishScore("foo2")).toBe(0);
    });
  })

  describe("bitternessScore", () => {
    it('should return 1 if beer bitterness is the same', () => {
      const service = new BeerScoreService({ bitterness: INTENSITY.LOW });

      expect(service.bitternessScore(INTENSITY.LOW)).toBe(1);
    });

    it('should return 0 if beer bitterness is not the same', () => {
      const service = new BeerScoreService({ bitterness: INTENSITY.LOW });

      expect(service.bitternessScore(INTENSITY.HIGH)).toBe(0);
    });
  })

  describe("alcoholScore", () => {
    it('should return 1 if beer alcohol is <= 5% and intensity is low', () => {
      const service = new BeerScoreService({ alcohol: 0.05 });

      expect(service.alcoholScore(INTENSITY.LOW)).toBe(1);
    });

    it('should return 1 if beer alcohol is <= 7% and intensity is moderate', () => {
      const service = new BeerScoreService({ alcohol: 0.065 });

      expect(service.alcoholScore(INTENSITY.MODERATE)).toBe(1);
    });

    it('should return 1 if beer alcohol is > 7% and intensity is high', () => {
      const service = new BeerScoreService({ alcohol: 0.12 });

      expect(service.alcoholScore(INTENSITY.HIGH)).toBe(1);
    });
  })
});
