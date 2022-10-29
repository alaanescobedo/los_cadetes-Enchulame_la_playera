export const writeLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
export const readLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
export const removeLocalStorage = (key) => localStorage.removeItem(key);
export const clearLocalStorage = () => localStorage.clear();


export default {
  write: writeLocalStorage,
  read: readLocalStorage,
  remove: removeLocalStorage,
  clear: clearLocalStorage
}