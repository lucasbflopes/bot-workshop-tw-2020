const ActionLookupWeather = require('../src/actionHandlers/actionLookupWeather');

describe('ActionLookupWeather', () => {
  let action;
  let weatherSeviceMock;

  beforeEach(() => {
    weatherSeviceMock = {
      lookupWeather: jest.fn(),
    };
    action = new ActionLookupWeather(weatherSeviceMock);
  });

  it("should have correct name", () => {
    expect(action.actionName).toBe("lookupWeather");
  });

  it("should lookup weather of city in service", () => {
    action.handle({ city: "foo" });

    expect(weatherSeviceMock.lookupWeather.mock.calls.length).toBe(1);
    expect(weatherSeviceMock.lookupWeather.mock.calls[0][0]).toBe("foo");
  });

  it("should return weather obtained in service", async () => {
    weatherSeviceMock.lookupWeather.mockReturnValue(
      Promise.resolve({ foo: "bar" })
    );
    var { weather } = await action.handle({ city: "foo" });

    expect(weather).toEqual({ foo: "bar" });
  });
});
