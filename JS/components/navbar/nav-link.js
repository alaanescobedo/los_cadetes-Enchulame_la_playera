export const generateNavLink = (href, label) => `
  <li class="tab">
    <a
      class="nav-link fs-6 rounded"
      href="${href}"
    >
      ${label}
    </a>
  </li>`