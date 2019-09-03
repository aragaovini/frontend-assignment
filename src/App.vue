<template>
    <div class="app">
        <Appbar />
        <div class="content-container"></div>
        <Footer />
    </div>
</template>

<script>
    import Appbar from 'Components/Appbar.vue'
    import Footer from 'Components/Footer.vue'

    export default {
        name: 'App',
        components: {
            Appbar,
            Footer
        }
    }
</script>

<style scoped>
    .app {
        display: flex;
        flex-direction: column;
    }

    .content-container {
        display: flex;
        flex: 1;
    }
</style>