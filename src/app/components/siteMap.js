const siteMap = {
  GUEST: {
    index: () => '/',
    login: () => '/login',
    register: () => '/register',
  },
  USER: {
    dashboard: () => '/dashboard',
    areas: () => '/areas',
    createArea: () => '/areas/create',
  },
}

export {
  siteMap,
}
