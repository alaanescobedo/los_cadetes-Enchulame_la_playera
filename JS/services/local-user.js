import { STORAGE_KEYS } from '../constants/storage-keys.js'
import { createLocalUser } from '../models/local-user.js'
import { writeLocalStorage, readLocalStorage, removeLocalStorage } from '../utils/local-storage.js'

export const setLocalUser = (userData) => writeLocalStorage(STORAGE_KEYS.USER, createLocalUser(userData))
export const getLocalUser = () => readLocalStorage(STORAGE_KEYS.USER)
export const removeLocalUser = () => removeLocalStorage(STORAGE_KEYS.USER)

export default {
  get: getLocalUser,
  set: setLocalUser,
  remove: removeLocalUser
}