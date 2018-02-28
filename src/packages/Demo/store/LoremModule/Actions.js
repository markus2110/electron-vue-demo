import Vue          from "vue";
import httpRequest  from "vue-resource";

Vue.use(httpRequest);

export default {
    fetchRecords  (context) {
        console.info("Fetching Lorem Records");
        var url = "https://baconipsum.com/api/?type=meat-and-filler&paras=50&start-with-lorem=1&format=json";
        Vue.http.get(url).then(
            // OK
            response => {
                console.info("Data fetched");
                context.commit("UPDATE_DATA", response.body);
            },

            // ERROR
            response => {
                console.log(response);
                alert("ERROR");
            }
        );
    }
};