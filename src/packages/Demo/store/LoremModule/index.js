import Getters      from "./Getters";
import Actions      from "./Actions";
import Mutations    from "./Mutations";


export const LoremStore = {

    name : "Lorem",

    namespaced: true,

    state : {
        data: [],
    },

    getters:    Getters,
    actions:    Actions,
    mutations:  Mutations
};