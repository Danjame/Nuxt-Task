module.exports = {
    router: {
        extendRoutes(routes, resolve) {
            routes.splice(0)
            routes.push(
                {
                    path: '/',
                    component: resolve(__dirname, 'pages/layout'),
                    children: [
                        {
                            path:'',
                            name: 'home',
                            component: resolve(__dirname, 'pages/home'),
                        }
                    ]
                }
            )
          }
    }
}