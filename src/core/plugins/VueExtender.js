const VueExtender =  {

    options : {
        packages : []
    },

    install : function (Vue, options){
        this._mergeOptions(options);
        this._extendVuePrototype(Vue);
    },


    _mergeOptions : function(options){
        Object.assign(this.options, options);
    },

    _extendVuePrototype : function(Vue){
        Vue.prototype.$packageList = this.options.packages;


        // method to get a registered package
        // throws an Error if package is not defined
        Vue.prototype.$getPackage = function(packName){
            if(typeof this.$packageList[packName] !== "undefined"){
                return this.$packageList[packName];
            }else{
                throw Error(`Package '${packName}' not registered`);
            }
        }

        // method to get a config value of registered package
        // throws an Error if package or config is not defined
        Vue.prototype.$getPackageConfig = function(packName, configName){
            
            var pack = Vue.prototype.$getPackage(packName);

            if(typeof pack.config[configName] !== "undefined"){
                return pack.config[configName];
            }else{
                throw Error(`Package config '${packName}/${configName}' not found`);
            }
        }
    },
}
export default VueExtender;