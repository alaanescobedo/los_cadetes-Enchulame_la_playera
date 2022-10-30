export const navLinks = [
  {
    href: '/',
    label: 'Home',
    style: 'home'
  },
  {
    href: '/src/html/editor.html',
    label: 'Personaliza',
    style: 'editor'
  },
  {
    href: '/src/html/productos.html',
    label: 'Productos',
    style: 'productos'
  },
  {
    href: '/src/html/contactanos.html',
    label: 'Contactanos',
    style: 'contactanos'
  },
  {
    href: '/src/html/about-us.html',
    label: 'Nosotros',
    style: 'about-us'
  },
  {
    href: '/src/html/login.html',
    label: 'Login',
    style: 'login'
  },
  {
    href: '/src/html/producto-info.html',
    style: 'producto'
  },
]
export const excludeLinks = ['/src/html/login.html', '/src/html/register.html', '/src/html/index.html', '/src/html/producto-info.html', '/src/html/editor.html']
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
        `<li><a class="dropdown-item" href="/src/html/login.html">Iniciar sesión</a></li>`,
        `<li><a class="dropdown-item" href="/src/html/register.html">Registrate</a></li>`
      ],
      online: [
        `<li><button class="btn dropdown-item" id="btn-logout">Cerrar sesión</button></li>`,
      ]

    }
  },
}
