// The CoreVue Class
import VueApp       from "./core/VueCore.js";

// Packages
import DemoPackage from "packages/Demo/index";
import UserPackage from "packages/User/index";

// The Main App Template
import AppMain      from "./views/app.vue";


var App = new VueApp({
    // Application wrapper
    el : '#application-wrapper',
    // The active Vue Packages
    activePackages : [ DemoPackage, UserPackage ],
    // App Template
    template : AppMain
})

// Mount the App
App.start();