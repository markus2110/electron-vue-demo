<template>
    <div>
        <h2>The Demo Component Index</h2>

        <router-view></router-view>

        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Done</th>
                </tr>
            </thead>

            <tbody  v-if="demoRecords.length > 0">
                <tr class="record" v-bind:class="{ done: record.done }" v-for="record in demoRecords">
                    <td>{{ record.id }}</td>
                    <td>{{ record.name }}</td>
                    <td><input type="checkbox" v-bind:checked="record.done ? 'checked' : ''" v-on:change="toggleDone(record)" /></td>
                </tr>
            </tbody>

            <tbody  v-else>
                <tr>
                    <td colspan="3">Loading Data ...</td>
                </tr>
            </tbody>


            <tfoot>
                <tr>
                    <td><span>Open: {{ notDoneRecords }}</span></td>
                    <td></td>
                    <td><span>Done: {{ doneRecords }}</span></td>
                </tr>

                <tr>
                    <td colspan="3" class="precentage">

                        <!--
                        <progress-bar v-bind:current="doneRecords" v-bind:total="demoRecords.length" v-show="demoRecords.length > 0" />
-->

                    </td>
                </tr>
            </tfoot>
        </table>

    </div>
</template>

<script>
    export default {

        created: function () {
            this.$store.dispatch('DemoPackage/Demo/fetchData');
        },

        computed: {
            demoRecords : function(){
                return this.$store.getters["DemoPackage/Demo/allData"];
            },

            doneRecords : function(){
                return this.$store.getters["DemoPackage/Demo/countDone"];
            },
            notDoneRecords : function(){
                return this.$store.getters["DemoPackage/Demo/countNotDone"];
            },

        },

        methods : {
            toggleDone : function(record){
                this.$store.commit("DemoPackage/Demo/TOGGLE_DONE", record);
            }
        }
    }
</script>