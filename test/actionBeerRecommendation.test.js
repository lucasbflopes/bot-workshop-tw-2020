const ActionBeerRecommendation = require('../src/actionHandlers/actionBeerRecommendation');
const { INTENSITY } = require('../src/constants');

describe('ActionBeerRecommendation', () => {
  const beers = [
    { kind: "foo", harmonization: "foo,bar,baz", alcohol: 0.04, bitterness: 3 },
    { kind: "bar", harmonization: "foo2,bar2,baz2", alcohol: 0.07, bitterness: 1},
    { kind: "baz", harmonization: "foo3,bar3,baz3", alcohol: 0.1, bitterness: 2}
  ];
  const beerRepositoryMock = {
    getAll: () => beers
  };
  const action = new ActionBeerRecommendation(beerRepositoryMock);

  it('should return first beer with maximum score -- same kind', async () => {
    const recommendation = await action.handle({
      kind: "bar"
    });

    expect(recommendation).toBe(beers[1]);
  });

  it('should return first beer with maximum score -- same kind, but other stats better', async () => {
    const recommendation = await action.handle({
      kind: "bar",
      dish: "foo1",
      alcohol: INTENSITY.LOW,
      bitterness: INTENSITY.HIGH
    });

    expect(recommendation).toBe(beers[0]);
  });
});
