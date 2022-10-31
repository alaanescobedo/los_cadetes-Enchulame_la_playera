export const generateProductInfo = ({ name, price, img }) => `
    <div class="d-none d-md-flex flex-column col-12 col-md-2 gap-2">
      <!-- Images vertical -->
      <img class="img-fluid" src="https://via.placeholder.com/150" alt="" />
      <img class="img-fluid" src="https://via.placeholder.com/150" alt="" />
      <img class="img-fluid" src="https://via.placeholder.com/150" alt="" />
    </div>
    <!-- IMAGE -->
    <div class="col-12 col-md-6 text-center">
      <img
        class="w-75 mx-auto img-fluid"
        src="${img}"
        alt="${name}-product-image"
      />
    </div>
    <!-- INFO -->
    <div class="col-12 col-md-4">
      <h1 class="fs-1">${name}</h1>
      <ul>
        <li>Manga larga</li>
        <li>100% Algodon</li>
        <li>Hecho en México</li>
      </ul>
      <h3>${price}</h3>
      <button class="btn colores m-0 w-100" id="add-to-cart">Agregar al carrito</button>
    </div>
  `
