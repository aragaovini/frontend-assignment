<template>
    <div class="input-box">
        <label>{{ label }}</label>
        <input v-bind="$attrs" @input="$emit('input', $event.target.value)" />
    </div>
</template>

<script>
    export default {
        name: 'Input',
        props: {
            label: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .input-box {
        display: flex;
        flex-direction: column;
        margin-bottom: 28px;
        label {
            color: #B1B1B1;
            font-weight: 500;
            font-size: 12px;
            margin-bottom: 6px;
            text-transform: uppercase;
        }
        input {
            padding: 6px;
            min-height: 24px;
            box-shadow: 0px 0px 5px #eaeaea;
            border-radius: 4px;
            max-width: 250px;
            border: 1px solid #D4D9E3;
            outline: none;
            transition: border .3s;
            &:focus {
                border: 1px solid #394783;
            }
        }
    }
</style>