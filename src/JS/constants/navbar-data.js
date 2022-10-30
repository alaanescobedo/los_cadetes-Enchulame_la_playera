export const navLinks = [
  {
    href: '/',
    label: 'Home',
    style: 'home'
  },
  {
    href: '/editor.html',
    label: 'Personaliza',
    style: 'editor'
  },
  {
    href: '/productos.html',
    label: 'Productos',
    style: 'productos'
  },
  {
    href: '/contactanos.html',
    label: 'Contactanos',
    style: 'contactanos'
  },
  {
    href: '/about-us.html',
    label: 'Nosotros',
    style: 'about-us'
  },
  {
    href: '/login.html',
    label: 'Login',
    style: 'login'
  },
  {
    href: '/producto-info.html',
    style: 'producto'
  },
]
export const excludeLinks = ['/login.html', '/register.html', '/index.html', '/producto-info.html', '/editor.html']
export const pathIcons = {
  cart: {
    label: 'Carrito',
    path: '/cart-fill.svg',
    url: '#'
  },
  profile: {
    label: 'Usuario',
    path: '/person-circle.svg',
    list: {
      offline: [
        `<li><a class="dropdown-item" href="/login.html">Iniciar sesión</a></li>`,
        `<li><a class="dropdown-item" href="/register.html">Registrate</a></li>`
      ],
      online: [
        `<li><button class="btn dropdown-item" id="btn-logout">Cerrar sesión</button></li>`,
      ]

    }
  },
}
