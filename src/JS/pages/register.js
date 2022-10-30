import { setLocalUser, getLocalUser } from "../services/local-user.js";
import { registerUser } from "../services/users.js";
import { handleSubmitForm, showError, hideLoader, initNotifyForm } from "../handlers/index.js";

const formElement = document.getElementById("login-form");

const verifyIfLogged = () => {
  const user = getLocalUser();
  if (user) location.href = "/index.html";
}

const submitRegister = async (e) => {
  try {
    e.preventDefault();
    // Ocultar Error y Mostrar Loader
    initNotifyForm()
    // Validar Formulario y Obtener Datos
    const data = handleSubmitForm(e.target);
    // Enviar Datos al Servidor
    const userData = await registerUser({ data });
    // Guardar Usuario en LocalStorage
    setLocalUser(userData);
    // Redireccionar a la Pagina de Inicio
    location.href = "/index.html";
  } catch (err) {
    showError(err)
  }
  finally {
    hideLoader()
  }
}

verifyIfLogged();
formElement.addEventListener('submit', submitRegister);