const formElement = document.getElementById('formularioCont');
// const inputsElement = getAllElements('.needs-validation');

const submitForm = (event) => {
    //Prevenir recarga de la página
    event.preventDefault();

    // Validar el formulario
    const isValid = formElement.checkValidity();
    if (!isValid) return formElement.classList.add('was-validated');

    formElement.classList.remove('was-validated');

    // Capturar los datos del formulario
    const data = Object.fromEntries(new FormData(formElement));

    formElement.reset();
}

formElement.addEventListener("submit", submitForm);
