<template>
    <div class="app">
        <Appbar />
        <div class="screens-path">
            <div>home <div class="slash">/</div> {{ GET_SELECTED_MENU.label }}</div>
        </div>
        <div class="content-container">
            <div>
                <Menu :items="menuItems"/>
            </div>
            <router-view></router-view>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Appbar from 'Components/Appbar.vue'
    import Footer from 'Components/Footer.vue'
    import Menu from 'Components/Menu.vue'
    import { mapGetters } from 'vuex'

    export default {
        name: 'App',
        components: {
            Appbar,
            Footer,
            Menu
        },
        computed: {
            ...mapGetters([
                'GET_SELECTED_MENU'
            ])
        },
        data: () => ({
            menuItems: [
                {
                    label: 'Company Data',
                    path: '/'
                },
                {
                    label: 'Company Table',
                    path: '/company-table'
                },
                {
                    label: 'Company Page',
                    path: '/company-page'
                }
            ]
        })
    }
</script>

<style scoped lang="scss">
    .app {
        display: flex;
        flex-direction: column;
    }

    .screens-path {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        padding: 28px 28px 0px 28px;
        font-size: 14px;
        color: #B1B1B1;
        div {
            text-transform: uppercase;
            display: flex;
        }
        .slash {
            margin: 0px 20px;
        }
    }

    .content-container {
        display: grid;
        grid-template-columns: 3fr 9fr;
        grid-gap: 28px;
        flex: 1;
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        padding: 0px 28px;
        margin-top: 28px;
        margin-bottom: 48px;
        @media (max-width: 950px) {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
        }
    }
</style>
