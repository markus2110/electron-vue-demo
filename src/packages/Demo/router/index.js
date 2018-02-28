const DemoHome      = function(){ return import(/* webpackChunkName: "demo/home" */ "../views/Index.vue") };
const DemoPage1     = function(){ return import(/* webpackChunkName: "demo/page1" */ "../views/Page1.vue") };
const DemoPage2     = function(){ return import(/* webpackChunkName: "demo/page2" */ "../views/Page2.vue") };

export const DemoRoutes = [
    { path: '/demo',        component: DemoHome,    name: 'demo-home',  },
    { path: '/demo/page1',  component: DemoPage1,   name: 'demo-page-1' },
    { path: '/demo/page2',  component: DemoPage2,   name: 'demo-page-2' }
];