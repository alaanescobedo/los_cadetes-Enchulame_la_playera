import { getAllProducts } from "../services/products.js";
import { generateCardProduct } from "../components/product/item.js";

const main = async () => {
    const data = await getAllProducts()
    data.forEach(item => generateCardProduct('#productos', item))
}

main();

