export const validateInputs = (inputs = []) => {
  if(inputs.length === 0) return false;
  const validInputs = inputs.filter((input) => {
    input.checkValidity() ? input.classList.remove('was-validated') : input.classList.add('was-validated')
    return input.checkValidity();
  });
  return validInputs.length === inputs.length;
}