<template>
    <div id="app-footer">
        <ul>
            <li>Footer 1</li>
            <li>Footer 2</li>
            <li>Footer 3</li>
            <li><router-link v-bind:to="{ name: 'not-exists' }" >Invalid URL</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {}
</script>


<style >

#app-footer {
    position: fixed;
    width: 100%;
    bottom: 0px;
    left: 0px;
    background:#dddddd;
    border-top: solid 1px #aaaaaa;
}

#app-footer ul{
    padding:5px;
    margin:0px;
}



</style>
