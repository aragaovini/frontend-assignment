<template>
    <div class="menu">
        <div 
        @click="() => changeRoute(item)" 
        v-for="(item, index) in items"
        :class="{'menu-divider': index}"
        :key="index" 
        class="menu-item">
            {{ item.label }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Menu',
        props: {
            items: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            changeRoute({ path }) {
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
            transition: all .3s;
            &.menu-divider {
                border-top: 1px solid #D4D9E3;
            }
            &:hover {
                background-color: #FAFBFC;
                cursor: pointer;
            }
        }
    }
</style>