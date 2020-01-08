const availableActions = require("./actionHandlers/index");

function send({action: actionName, ...parameters}) {
  const action = availableActions.find(a => a.name === actionName);
  if (!action) {
    throw new Error(`Unknown action '${actionName}'.`);
  }

  return action.handle(parameters);
}

module.exports = {
  send
}