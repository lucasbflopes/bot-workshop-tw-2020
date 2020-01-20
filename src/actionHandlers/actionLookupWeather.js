class ActionLookupWeather {
  constructor(weatherService) {
    this.weatherService = weatherService;
  }

  get actionName() {
    return 'lookupWeather';
  }

  async handle({ city }) {
    const weather = await this.weatherService.lookupWeather(city);
    return { weather };
  }
}

module.exports = ActionLookupWeather;
