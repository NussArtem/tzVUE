import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

export default new Router({

    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Home.vue'),
        }, {
            path: '/poster',
            name: 'Poster',
            component: () => import('./views/Poster.vue'),
        },
        {
            path: '/news',
            name: 'News',
            component: () => import('./views/News.vue'),
        },{
            path: '/admin',
            name: 'Admin',
            component: () => import('./views/Admin.vue'),
        },{
            path: '/newsview',
            name: 'newsview',
            component: () => import('./views/NewlView.vue'),
        },
        {
            path: '/film/:id',
            name: 'Poster',
            component: () => import('./views/Film.vue'),
        },
    ],
    mode: 'history'
})
