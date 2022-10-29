export const generateNavBtnIcon = (label, path, url) => `
  <a class="d-flex gap-2 align-items-center" style="cursor: pointer; text-decoration:none;" href="${url}">
    <img class="w-100" style="filter: invert(1)" src="${path}" alt="${label}-icon" />
    <p class="fw-semibold text-white fs-6 m-0">${label}</p>
  </a>
  `
export const generateNavDropdownIcon = (label, path, list) => `
  <div class="btn-group">
    <button class="btn btn-sm d-flex gap-2 align-items-center rounded dropdown-menu-end" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      <img class="w-100" style="filter: invert(1)" src="${path}" alt="${label}-icon" />
      <p class="fw-semibold text-white fs-6 m-0">${label}</p>
    </button>
    <ul class="dropdown-menu dropdown-menu-lg-end dropdown-menu-dark border border-2 border-dark">
      ${list}
    </ul>
  </div>
`