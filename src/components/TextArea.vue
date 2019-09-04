<template>
    <div class="input-container">
        <label>{{ label }}</label>
        <textarea @focus="$emit('onFocus')" rows="7" v-bind="$attrs" @input="$emit('input', $event.target.value)" />
    </div>
</template>

<script>
    export default {
        name: 'TextArea',
        props: {
            label: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .input-container {
        textarea {
            padding: 6px;
            min-height: 24px;
            box-shadow: 0px 0px 5px #eaeaea;
            border-radius: 4px;
            border: 1px solid #D4D9E3;
            outline: none;
            transition: border .3s;
            resize: none;
            &:focus {
                border: 1px solid #394783;
            }
        }
    }
</style>