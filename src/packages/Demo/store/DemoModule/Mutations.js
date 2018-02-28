export default {

    UPDATE_DATA : function(state, data){
        state.data = data;
    },

    TOGGLE_DONE : function(state, record){
        record.done = (record.done) ? false : true;
    },

}