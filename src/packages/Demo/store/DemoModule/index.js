import Getters      from "./Getters";
import Actions      from "./Actions";
import Mutations    from "./Mutations";


export const DemoStore = {

    name : "Demo",

    namespaced: true,

    state : {
        data: [],
    },

    getters:    Getters,
    actions:    Actions,
    mutations:  Mutations
};