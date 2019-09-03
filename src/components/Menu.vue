<template>
    <div class="menu">
        <div 
        @click="() => changeRoute(item)" 
        v-for="(item, index) in items"
        :class="{'menu-divider': index, 'menu-selected': GET_SELECTED_MENU === item.path}"
        :key="index" 
        class="menu-item">
            {{ item.label }}
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    export default {
        name: 'Menu',
        computed: {
            ...mapGetters([
                'GET_SELECTED_MENU'
            ])
        },
        props: {
            items: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            ...mapMutations([
                'SET_SELECTED_MENU'
            ]),
            changeRoute({ path }) {
                this.SET_SELECTED_MENU(path)
                this.$router.push(path)
            }
        }
    }
</script>

<style scoped lang="scss">
    .menu {
        border: 1px solid #D4D9E3;
        border-radius: 4px;
        background-color: #FFF;
        .menu-item {
            font-size: 14px;
            font-weight: 400;
            text-transform: uppercase;
            padding: 18px;
            transition: background-color .3s;
            &.menu-divider {
                border-top: 1px solid #D4D9E3;
            }
            &.menu-selected {
                background-color: #FAFBFC;
                font-weight: 500;
            }
            &:hover {
                background-color: #FAFBFC;
                cursor: pointer;
            }
        }
    }
</style>