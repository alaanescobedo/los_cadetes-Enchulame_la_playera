const errorElement = document.getElementById("notify-form-error");
const loaderElement = document.getElementById("notify-form-loader");

export const initNotifyForm = (message) => {
  errorElement.classList.add("d-none");
  loaderElement.classList.remove("d-none");
}
export const showError = (error) => {
  console.log(error); // Para desarrollo
  errorElement.classList.remove("d-none");
}
export const hideLoader = () => loaderElement.classList.add("d-none");

export default {
  init: initNotifyForm,
  shoError: showError,
  hideLoader: hideLoader
}