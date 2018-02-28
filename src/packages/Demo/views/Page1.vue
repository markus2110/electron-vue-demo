<template>
    <div>
        <h2>The Demo Component Pag1</h2>


        <div v-if="demoRecords.length > 0">
            <p v-for="record in demoRecords">{{ record }}</p>
        </div>
        <div  v-else>
            <span>Loading ...</span>
        </div>

    </div>
</template>

<script>
    export default {

        created: function () {
            this.$store.dispatch('DemoPackage/Lorem/fetchRecords');
        },

        computed: {
            demoRecords : function(){
                let records = this.$store.getters["DemoPackage/Lorem/allRecords"];
                return records;
            }
        }

    }
</script>