<template>
    <div class="modal-container" :class="{'opened-modal': open}">
        <div class="modal-content">
            <div @click="close" class="close-button">x</div>
            <slot/>
        </div>
        <div class="modal-background" @click="close"></div>
    </div>
</template>

<script>
    export default {
        name: 'Modal',
        props: {
            open: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            close() {
                this.$emit('closeModal')
            }
        }
    }
</script>

<style scoped lang="scss">
    .modal-container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: opacity .3s, z-index 0s linear .4s;;
        z-index: -1;
        &.opened-modal {
            opacity: 1;
            z-index: 1;
            transition: opacity .3s, z-index 0s;
        }
        .modal-content {
            flex-direction: column;
            padding: 28px;
            max-width: 600px;
            z-index: 2;
            background: #FFF;
            display: flex;
            flex: 1;
            position: relative;
        }
        .close-button {
            position: absolute;
            right: 28px;
            color: #B1B1B1;
            font-size: 24px;
            top: 20px;
            cursor: pointer;
        }
    }
    .modal-background {
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: #00000073;
    }
</style>