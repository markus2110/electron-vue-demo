<template>
    <div id="app-header">
        <h1>first-electron-vue-app</h1>
        <ul>
            <li><router-link v-bind:to="{ name: 'home' }" >Home</router-link></li>
            <li><router-link v-bind:to="{ name: 'about' }" >About</router-link></li>
            <li><router-link v-bind:to="{ name: 'demo-home' }" >demo</router-link></li>
            <li><router-link v-bind:to="{ name: 'demo-page-1' }" >demo 1</router-link></li>
            <li><router-link v-bind:to="{ name: 'demo-page-2' }" >demo 2</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {}
</script>


<style >

#app-header {
    position: fixed;
    width: 100%;
    top: 0px;
    left: 0px;
    background:#dddddd;
    border-bottom: solid 1px #aaaaaa;
}

#app-footer ul{
    padding:5px;
    margin:0px;
}



</style>