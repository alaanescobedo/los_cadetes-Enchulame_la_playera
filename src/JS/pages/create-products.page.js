import { postProduct } from "../services/products.js";
import { handleSubmitForm, showError, hideLoader, initNotifyForm } from "../handlers/index.js";

const formElement = document.getElementById("form-create-products");

const submitCreateProduct = async (e) => {
  try {
    e.preventDefault();
    // Ocultar Error y Mostrar Loader
    initNotifyForm()
    // Validar Formulario y Obtener Datos
    const data = handleSubmitForm(e.target);
    // Enviar Datos al Servidor
    const response = await postProduct({ data });
    // currentForm.reset();
  } catch (error) {
    console.log(error);
    showError(error)
  }
  finally {
    hideLoader()
  }
}

formElement.addEventListener('submit', submitCreateProduct);