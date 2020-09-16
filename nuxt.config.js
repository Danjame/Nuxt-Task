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
                        },
                        {
                            path:'/login',
                            name: 'login',
                            component: resolve(__dirname, 'pages/login'),
                        },
                        {
                            path:'/profile',
                            name: 'profile',
                            component: resolve(__dirname, 'pages/profile'),
                        },
                        {
                            path:'/settings',
                            name: 'settings',
                            component: resolve(__dirname, 'pages/settings'),
                        },
                        {
                            path:'/editor',
                            name: 'editor',
                            component: resolve(__dirname, 'pages/editor'),
                        },
                        {
                            path:'/article',
                            name: 'article',
                            component: resolve(__dirname, 'pages/article'),
                        }
                    ]
                }
            )
          }
    }
}