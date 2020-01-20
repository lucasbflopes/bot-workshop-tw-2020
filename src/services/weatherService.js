const axios = require('axios');

class WeatherService {

  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.openweathermap.org/data/2.5'
  }

  async lookupWeather(city) {
      const response = await axios.get(`${this.baseUrl}/weather`, {
        params: {
          q: `${city},BR`,
          units: "metric",
          lang: "pt_br",
          APPID: this.apiKey
        }
      });

      return {
          temperature: response.data.main.temp,
          description: response.data.weather[0].description,
          humidity: response.data.main.humidity
      };
  };
}

module.exports = WeatherService;
