const mediator = require("../src/actionMediator");

jest.mock("../src/actionHandlers/index", () => () => [
  { name: "foo", handle: params => ({ name: "foo" }) },
  { name: "bar", handle: params => ({ name: "bar" }) },
  { name: "baz", handle: params => ({ name: "baz" }) }
]);

describe("actionMediator", () =>{
  test("should throw exception if actionName cannot be handled", () => {
    expect(() => mediator.send({action: "foo1"})).toThrow();
  })

  test("should return result of action if there is a handler", () => {
    const result = mediator.send({action: "bar"});
    expect(result.name).toBe("bar");
  });
})  