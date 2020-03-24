<template>
    <div class="app-container"
    >
        <header-main></header-main>
        <router-view></router-view>
    </div>
</template>
<script>
    import HeaderMain from './components/HeaderMain/HeaderMain'

    export default {
        name: 'app',
        components: {
            HeaderMain
        }

    }
</script>
<style>


    #app {

        margin-left: auto;
        margin-right: auto;
        min-height: 100vh;
        min-width: 100vw;
    }
</style>
