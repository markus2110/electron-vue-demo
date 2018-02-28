import { DemoPackageConfig } from "./config/index";
import { DemoRoutes } from "./router/index";
import { DemoStore } from "./store/DemoModule/index";
import { LoremStore } from "./store/LoremModule/index";


export default {
    "DemoPackage" : {
        config  : DemoPackageConfig,
        store   : [ DemoStore, LoremStore ],
        routes  : DemoRoutes
    }
};