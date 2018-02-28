import Vue from 'vue';
import VueRouter from 'vue-router';
import RouteExistsGuard from "./guards/routeExists";


Vue.use(VueRouter);


const DefaultRoutes = [
    // The Home Page
    {
        path:       '/',
        component:  () => import(/* webpackChunkName: "page/home" */ "../views/pages/home.vue"),
        name:       'home'
    },
    
    // The About Page
    {
        path:       '/about',
        component:  () => import(/* webpackChunkName: "page/about" */ "../views/pages/about.vue"),
        name:       'about'
    },
    
    {
        path:       '/404',
        component:  () => import(/* webpackChunkName: "page/404" */ "../views/pages/404.vue"),
        name:       '404'
    }    

];


const Router = new VueRouter({
    routes : DefaultRoutes,
});


// check for valid route
Router.beforeEach(RouteExistsGuard);


export default Router;