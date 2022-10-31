export const generateCardProduct = (selector, { id, name, by, img, price }) => {
  const item = `
  <div class="col d-flex flex-column">
    <div class="flex flex-grow-1">
      <div>
          <p class="fw-bold fs-3 m-0 my-1">${name}</p>
          <span class="fw-bold fs-6 d-block text-uppercase">${by}</span>
      </div>
      <img class="w-50 my-3 img-fluid" src="${img}" >
    </div>
    <div>
      <p class="fw-bold fs-3 m-0 my-1">${price}</p>
      <a href="/producto-info.html?id=${id}" class="btn my-3 btn-outline-secondary "> 
        ✧ ¿Deseas ver mas detalles? ✦
      </a>
    </div>
  </div>
  `

  document.querySelector(selector).innerHTML += item
}