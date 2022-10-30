import { navLinks, excludeLinks, pathIcons } from '../../constants/index.js';
import { generateNavLink } from './nav-link.js'
import { generateNavBtnIcon, generateNavDropdownIcon } from './nav-btn-icon.js'

export const loadNavbar = (user) => {
  const currentSite = navLinks.find((navLink) => location.pathname.toLowerCase() === navLink.href)

  let profileList;
  if (user?.id) profileList = pathIcons.profile.list.online
  else profileList = pathIcons.profile.list.offline

  const navbarHTML = `
    <div class="navbar nav ${currentSite?.style ?? ''} navbar-expand-lg navbar-light justify-content-center p-0" >
      <div class="container-fluid py-2 w-90">
        <a class="navbar-brand" href="/">
          <img
            src="https://i.postimg.cc/TwKBhCqZ/logo-basico.png"
            alt="logo"
            width="80"
            height="40"
            class="img-fluid"
            align="right"
          />
        </a>

    <!-- BOTÓN DE RESPONSIVE -->
    <button
      class="navbar-toggler border-white border-opacity-25 d-flex d-lg-none px-2"
      type="button"
      style="transform: scale(1.25)"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <img src="/assets/icons/burger.svg" class="fs-1 filter-invert" />
    </button>

    <!-- LINKS DE LA NAV -->
    <div class="collapse navbar-collapse justify-content-end gap-4" id="navbarSupportedContent">
      <ul class="navbar-nav nav text-center pb-lg-0">
      ${navLinks
      .filter(link => !excludeLinks.includes(link.href))
      .map(link => generateNavLink(link.href, link.label))
      .join('')}
      </ul>

      <!-- ICONOS DE CARRITO Y LOGIN -->
        <div class="d-flex justify-content-center gap-3 py-2 align-items-center" >
          ${generateNavBtnIcon(pathIcons.cart.label, pathIcons.cart.path, pathIcons.cart.url)}
          ${generateNavDropdownIcon(user?.username ?? pathIcons.profile.label, pathIcons.profile.path, profileList.join(''))}
        </div>
      </div>
    </div>
  </div>
`

  document.getElementById('navbar').innerHTML = navbarHTML;
}
loadNavbar()
export default loadNavbar;