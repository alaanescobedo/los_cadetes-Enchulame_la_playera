import { bootstrapComponents } from './components/core.js';
import { localUser } from './services/index.js';

const logout = () => {
  localUser.remove();
  location.reload();
}

const main = async () => {
  const user = await localUser.get() ?? null;
  bootstrapComponents(user);

  if (user) {
    const btnLogout = document.getElementById('btn-logout');
    btnLogout.addEventListener('click', logout);
  }
}

main();