const yup = require("yup");

const schema = yup.object().shape({
  action: yup.string().required()
});

function validate(obj) {
  try {
    schema.validateSync(obj);
    return {
      isValid: true
    };
  } catch (error) {
    return {
      isValid: false,
      errorMessage: error.errors.join(", ")
    }
  }
}

module.exports = {
  validate
}