export const navLinks = [
  {
    href: '/',
    label: 'Home',
    style: 'home'
  },
  {
    href: '/html/editor.html',
    label: 'Personaliza',
    style: 'editor'
  },
  {
    href: '/html/productos.html',
    label: 'Productos',
    style: 'productos'
  },
  {
    href: '/html/contactanos.html',
    label: 'Contactanos',
    style: 'contactanos'
  },
  {
    href: '/html/about-us.html',
    label: 'Nosotros',
    style: 'about-us'
  },
  {
    href: '/html/login.html',
    label: 'Login',
    style: 'login'
  },
  {
    href: '/html/producto-info.html',
    style: 'producto'
  },
]
export const excludeLinks = ['/html/login.html', '/html/register.html', '/html/index.html', '/html/producto-info.html', '/html/editor.html']
export const pathIcons = {
  cart: {
    label: 'Carrito',
    path: '/assets/icons/cart-fill.svg',
    url: '#'
  },
  profile: {
    label: 'Usuario',
    path: '/assets/icons/person-circle.svg',
    list: {
      offline: [
        `<li><a class="dropdown-item" href="/html/login.html">Iniciar sesión</a></li>`,
        `<li><a class="dropdown-item" href="/html/register.html">Registrate</a></li>`
      ],
      online: [
        `<li><button class="btn dropdown-item" id="btn-logout">Cerrar sesión</button></li>`,
      ]

    }
  },
}
