<template>
    <div class="app-container"
    >
        <Header></Header>
        <router-view></router-view>
    </div>
</template>
<script>

    import Header from './views/Header'

    export default {
        name: 'app',
        components: {
            Header
        }

    }
</script>
<style>


    #app {

        margin-left: auto;
        margin-right: auto;
        min-height: 100vh;
    }
</style>
