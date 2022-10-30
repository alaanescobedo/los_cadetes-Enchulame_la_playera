import { navLinks } from '../../constants/index.js';

export const loadFooter = () => {
  const currentSite = navLinks.find((navLink) => window.location.pathname.toLowerCase() === navLink.href)
  const navbarHTML = `
    <div class="footer ${currentSite?.style ?? ''}">
      <div class="text-end py-2">
        <a href="#" type="button" class="btn btn-outline btn-md filter-invert"> <img class="img-fluid" 
        src=${new URL("/public/assets/icons/telegram.svg", import.meta.url)} alt=""></a>
              
        <a href="#" type="button" class="btn btn-outline btn-md filter-invert"> <img class="img-fluid" 
        src=${new URL("/public/assets/icons/instagram.svg", import.meta.url)} alt="Icono instagram"> </a>
        
        <a href="#" type="button" class="btn btn-outline btn-md filter-invert"> <img class="img-fluid" 
        src=${new URL("/public/assets/icons/facebook.svg", import.meta.url)} alt="Icono"> </a>
        
        <a href="#" type="button" class="btn btn-outline btn-md filter-invert"> <img class="img-fluid" 
        src=${new URL("/public/assets/icons/whatsapp.svg", import.meta.url)} alt="Icono Whats App"> </a>
      </div>  
    </div>
  `
  document.getElementById('footer').innerHTML = navbarHTML;
}

export default loadFooter;