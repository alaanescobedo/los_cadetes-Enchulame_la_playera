import { generateProductInfo } from '../components/product/product-info.js';
import { getProductById } from '../services/products.js'
import { addCartItem } from '../services/local-cart.js';

const productContainer = document.getElementById('product-info-container')


const main = async () => {
  const urlParams = new URLSearchParams(location.search);
  const productId = urlParams.get('id');
  const productInfo = await getProductById(productId);
  productContainer.innerHTML = generateProductInfo(productInfo);

  const btnAddToCart = document.getElementById('add-to-cart')
  btnAddToCart.addEventListener('click', () => {
    addCartItem(productInfo);
  })
}
main()

