import Vue          from "vue";
import VueExtender  from "./plugins/VueExtender";
import Router       from "@/router/index.js";
import Store        from "@/store/index.js";



var VueApp = function(options){
    this.options = options;
    this.init();
}


VueApp.prototype = {

    options :   {},

    router :    Router,

    store :     Store,

    activePackages : [],

    init : function(){
        this._registerPackages();

        for(var packName in this.activePackages){

            var _package = this.activePackages[packName];

            this._registerRoutes(_package, packName);

            this._registerStore(_package, packName);
        }
    },

    start : function(){

        Vue.use(VueExtender,{
            packages : this.activePackages
        });

        return new Vue({
            // Vue App Wrapper
            el : this.options.el,
            // Vue-Router
            router :        this.router,
            // VueX
            store :         this.store,
            // Render function
            render : (h) => h(this.options.template)
        })
    },


    _registerPackages : function(){

        var activePackages  = this.options.activePackages;
        var packageList     = [];

        activePackages.forEach( (pack, index) => {
            var packName = Object.keys(pack).toString();
            var packAttributes = pack[packName];

            if(typeof packageList[packName] === "undefined"){
                packageList[packName] = packAttributes;
            }else{
                throw Error(`Package '${packName}' already registered`);
            }
        });

        this.activePackages = packageList;
    },

    // Register Routing
    _registerRoutes : function(_package, _packageName){
        if(typeof _package.routes === "object"){
            this.router.addRoutes(_package.routes);
        }
    },

    _registerStore : function(_package, _packageName){
        // Register multiple package stores
        if (typeof _package.store === "object" && typeof _package.store.length !== "undefined" && _package.store.length > 0){
            _package.store.forEach(( storeModule ) => {
                this.store.registerModule(_packageName + "/" + storeModule.name, storeModule);
            });
        }
        // Register a Single Store
        else if(typeof _package.store === "object"){
            this.store.registerModule(_packageName + "/"+ _package.store.name, pack.store);
        }
    }
};

export default VueApp;