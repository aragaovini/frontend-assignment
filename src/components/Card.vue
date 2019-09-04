<template>
    <div class="card">
        <div class="title">{{ title }}</div>
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            title: {
                type: String
            }
        }
    }
</script>

<style scoped lang="scss">
    .card {
        background-color: #FFF;
        border-radius: 4px;
        border: 1px solid #D4D9E3;
        .title {
            text-transform: uppercase;
            font-size: 12px;
            border-bottom: 1px solid #D4D9E3;
            font-weight: 500;
            padding: 18px;
            color: #656565;
        }
    }
</style>