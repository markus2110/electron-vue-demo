export default {
        
    allData: function(state){
        return state.data;
    },

    countDone : function(state){
        var data = state.data.filter(function(record){
            return (record.done === true);
        });
        return data.length;
    },

    countNotDone : function(state){
        var data = state.data.filter(function(record){
            return (record.done === false);
        });
        return data.length;
    }

}