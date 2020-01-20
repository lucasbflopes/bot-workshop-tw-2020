const ActionLookupWeather = require("./actionLookupWeather");
const ActionBeerRecommendation = require("./actionBeerRecommendation");

const BeerRepository = require("../repositories/beerRepository");
const WeatherService = require("../services/weatherService");

const { beers } = require("../../data") 

module.exports = {
  actionHandlers: [
    new ActionLookupWeather(new WeatherService(process.env.WEATHER_APIKEY)),
    new ActionBeerRecommendation(new BeerRepository(beers))
  ]
};