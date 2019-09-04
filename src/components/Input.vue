<template>
    <div class="input-container" :class="{'transparent-input': transparent}">
        <label v-if="label">{{ label }}</label>
        <input 
            @focus="handleFocus" 
            @blur="validate" 
            v-bind="$attrs" 
            v-model="model"
            ref="input"
            @keypress="handleKeyPress"
            @input="$emit('input', $event.target.value)" />
    </div>
</template>

<script>
    export default {
        name: 'Input',
        data: () => ({
            model: ''
        }),
        props: {
            label: {
                type: String,
                required: false
            },
            required: {
                type: Boolean,
                default: false
            },
            currency: {
                type: Boolean,
                default: false
            },
            transparent: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            handleFocus() {
                if (this.currency) {
                    this.model = this.model.replace(/[,$ ]+/g, "")
                }
            },
            handleCurrencyBlur() {
                if (this.model) {

                    const formatter = new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 2
                    })

                    const formattedValue = formatter.format(this.model)
                    if (formattedValue === '$NaN') {
                        this.model = '$ 0.00'
                        return
                    }

                    this.model = formatter.format(this.model)
                    this.$emit('input', this.model)
                }
            },
            handleKeyPress(event) {
                if (this.currency) {
                    const key = String.fromCharCode(event.keyCode || event.which)
                    const isNumber = /^[\d,.?!]+$/.test(key)
                    if (!isNumber) event.preventDefault();
                }
            },
            validate() {
                const { model, required, currency } = this

                if (currency) this.handleCurrencyBlur()

                if (required && !model) {
                    this.$emit('onError', 'Required field')
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .input-container {
        &.transparent-input {
            input {
                background-color: transparent;
                border: 0px;
                box-shadow: 0px 0px 0px #fff;
            }
        }
    }
</style>