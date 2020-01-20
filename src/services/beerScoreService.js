const { INTENSITY } = require("../constants");

function getBeerAlcoholIntensity(alcoholPercentage) {
  if (alcoholPercentage <= 0.05) {
    return INTENSITY.LOW;
  }

  if (alcoholPercentage <= 0.07) {
    return INTENSITY.MODERATE;
  }

  return INTENSITY.HIGH;
}


class BeerScoreService {
  constructor(beer) {
    this.beer = beer;
  }

  kindScore(kind) {
    if (this.beer.kind === kind) {
      return 2;
    }

    return 0;
  }

  dishScore(dish) {
    if (this.beer.harmonization.includes(dish)) {
      return 1;
    }

    return 0;
  }

  bitternessScore(bitterness) {
    if (this.beer.bitterness === bitterness) {
      return 1;
    }

    return 0;
  }

  alcoholScore(alcoholIntensity) {
    if (getBeerAlcoholIntensity(this.beer.alcohol) == alcoholIntensity) {
      return 1;
    }

    return 0;
  }
}

module.exports = BeerScoreService;