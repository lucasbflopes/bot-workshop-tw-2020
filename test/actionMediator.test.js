const ActionMediator = require('../src/actionMediator');

describe('ActionMediator', () => {
  const mediator = new ActionMediator([
    { actionName: 'foo', handle: () => ({ value: 1 }) },
    { actionName: 'bar', handle: () => ({ value: 2 }) },
  ]);

  it('should throw exception if there is no handler for an action', () => {
    expect(
      () => mediator.send({ action: 'foo1' }),
    ).toThrow("Could not find a handler for action 'foo1'.");
  });

  it('should return result of action if there is a handler', () => {
    const resultActionFoo = mediator.send({ action: 'foo' });
    const resultActionBar = mediator.send({ action: 'bar' });

    expect(resultActionFoo.value).toBe(1);
    expect(resultActionBar.value).toBe(2);
  });
});
