const demoData = [
    { id:1, name:"Data 1", done:false },
    { id:2, name:"Data 2", done:false },
    { id:3, name:"Data 3", done:true },
    { id:4, name:"Data 4", done:false },
    { id:5, name:"Data 5", done:true },
    { id:6, name:"Data 6", done:false },
    { id:7, name:"Data 7", done:true },
    { id:8, name:"Data 8", done:false }

];

export default {
    fetchData  (context) {
        console.info("Fetching Data");
        setTimeout(function(){
            console.info("Data fetched");
            context.commit("UPDATE_DATA", demoData);
        }, 1000);
    }
};