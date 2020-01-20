const request = require("supertest");
const app = require("../server");

xdescribe("POST api/webhooks", () => {

  it("should return an error if payload does not contain action", async () => {
    const res = await request(app)
      .post("/api/webhook")
      .send({
        foo: 1
      });

    expect(res.statusCode).toEqual(400);
  });

  it("should return an error if payload contains an invalid action", async () => {
    const res = await request(app)
      .post("/api/webhook")
      .send({
        action: 'foobs'
      });

    expect(res.statusCode).toEqual(500);
  });

  it("should return valid json schema when action is 'lookupWeather'", async () => {
    const res = await request(app)
      .post("/api/webhook")
      .send({
        action: 'lookupWeather',
        'city': 'Cabo Frio'
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body.weather).toMatchObject({
      temperature: expect.any(Number),
      description: expect.any(String),
      humidity: expect.any(Number)
    });
  });

});
