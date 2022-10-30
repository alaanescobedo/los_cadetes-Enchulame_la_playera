import { navLinks } from '../../constants/index.js';

export const loadFooter = () => {
  const currentSite = navLinks.find((navLink) => window.location.pathname.toLowerCase() === navLink.href)
  const navbarHTML = `
    <div class="footer ${currentSite?.style ?? ''}">
      <div class="text-end py-2">
        <a href="#" type="button" class="btn btn-outline btn-md filter-invert"> <img class="img-fluid" src="/telegram.svg" alt=""></a>
              
        <a href="#" type="button" class="btn btn-outline btn-md filter-invert"> <img class="img-fluid" src="/instagram.svg" alt="Icono instagram"> </a>
        
        <a href="#" type="button" class="btn btn-outline btn-md filter-invert"> <img class="img-fluid" src="/facebook.svg" alt="Icono"> </a>
        
        <a href="#" type="button" class="btn btn-outline btn-md filter-invert"> <img class="img-fluid" src="/whatsapp.svg" alt="Icono Whats App"> </a>
      </div>  
    </div>
  `
  document.getElementById('footer').innerHTML = navbarHTML;
}

export default loadFooter;