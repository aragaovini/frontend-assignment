<template>
    <div>
        <button class="button">
            <slot />
        </button>
    </div>
</template>

<script>
    export default {
        name: 'Button'
    }
</script>

<style scoped lang="scss">
    .button {
        background-color: #5D699A;
        font-size: 16px;
        border: 0px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFF;
        padding: 8px 24px;
        text-transform: uppercase;
        transition: opacity .3s;
        outline: none;
        &:hover {
            opacity: 0.7;
            cursor: pointer;
        }
    }
</style>