<template>
    <div class="input-container">
        <label>{{ label }}</label>
        <div class="inputs-container">
            <Input currency transparent v-model="firstValue"/>
            <div class="inputs-divider">{{ divider }}</div>
            <Input currency transparent v-model="lastValue"/>
        </div>
    </div>
</template>

<script>
    import Input from 'Components/Input.vue'
    export default {
        name: 'RangeInput',
        data: () => ({
            firstValue: '',
            lastValue: ''
        }),
        components: {
            Input
        },
        props: {
            label: {
                type: String,
                required: true
            },
            divider: {
                type: String,
                default: '-'
            }
        }
    }
</script>

<style scoped lang="scss">
    .inputs-container {
        display: flex;
        align-items: center;
        min-height: 24px;
        box-shadow: 0px 0px 5px #eaeaea;
        border-radius: 4px;
        max-width: 300px;
        border: 1px solid #D4D9E3;
        outline: none;
        transition: border .3s;
        padding: 0px 6px;
        .inputs-divider {
            margin: 0px 12px;
            color: #ccc;
            font-size: 26px;
        }
    }
</style>