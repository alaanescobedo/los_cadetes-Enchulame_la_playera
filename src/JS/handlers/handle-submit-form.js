export const handleSubmitForm = (currentForm) => {
  const isValid = currentForm.checkValidity();
  if (!isValid)  {
    currentForm.classList.add('was-validated');
    throw new Error('Form is not valid');
  }
  currentForm.classList.remove('was-validated');
  return Object.fromEntries(new FormData(currentForm));
}