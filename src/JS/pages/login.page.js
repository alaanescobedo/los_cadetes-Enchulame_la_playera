import { setLocalUser, getLocalUser } from "../services/local-user.js";
import { mockLoginUser as loginUser } from "../services/users.js";
import { } from "../handlers/handle-notify-form.js";
import { handleSubmitForm, showError, hideLoader, initNotifyForm } from "../handlers/index.js";

const formElement = document.getElementById("login-form");

const submitRegister = async (e) => {
  try {
    e.preventDefault();
    // Ocultar Error y Mostrar Loader
    initNotifyForm()
    // Validar Formulario y Obtener Datos
    const data = handleSubmitForm(e.target);
    // Enviar Datos al Servidor
    const userData = await loginUser({ data });
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

const verifyIfLogged = () => {
  const user = getLocalUser();
  if (user) location.href = "/index.html";
}
formElement.addEventListener('submit', submitRegister);
verifyIfLogged();