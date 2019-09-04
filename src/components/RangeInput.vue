<template>
    <div class="input-container">
        <label>{{ label }}</label>
        <div class="inputs-container" :class="{ 'error-input': errorMessage }">
            <Input @onBeforeMask="(value) => handleValues('firstValue', value)" currency transparent/>
            <div class="inputs-divider">{{ divider }}</div>
            <Input @onBeforeMask="(value) => handleValues('lastValue', value)" currency transparent/>
        </div>
        <div class="error-container">{{errorMessage}}</div>
    </div>
</template>

<script>
    import Input from 'Components/Input.vue'
    export default {
        name: 'RangeInput',
        data: () => ({
            values: {
                firstValue: '',
                lastValue: ''
            },
            errorMessage: ''
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
        },
        methods: {
            handleValues(field, value) {
                this.values[field] = Number(value)
                if (this.values.firstValue > this.values.lastValue) {
                    this.errorMessage = 'First field is greater than the last one.'
                } else {
                    this.errorMessage = ''
                }
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