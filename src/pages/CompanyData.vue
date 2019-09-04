<template>
    <div class="company-data-container">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Input required label="Company Name" type="text" v-model="companyName"/>
        <Input currency label="Company Spend" v-model="companySpend"/>
        <RangeInput label="Company Spend Ability" v-model="companySpendAbility"/>
        <Textarea @click.native="openModal" label="Notes" type="text" v-model="notes"/>
        <Modal :open="mustOpenModal" @closeModal="closeModal">
            <h1>Additional Notes</h1>
            <Textarea @click.native="openModal" type="text" v-model="notes"/>
            <div class="buttons-container">
                <Button @click.native="closeModal">save</Button>
            </div>
        </modal>
    </div>
</template>

<script>
    import Input from 'Components/Input.vue'
    import RangeInput from 'Components/RangeInput.vue'
    import Textarea from 'Components/Textarea.vue'
    import Modal from 'Components/Modal.vue'
    import Button from 'Components/Button.vue'

    export default {
        name: 'CompanyData',
        components: {
            Input,
            RangeInput,
            Textarea,
            Modal,
            Button
        },
        data: () => ({
            companyName: '',
            companySpend: 0,
            companySpendAbility: '',
            notes: '',
            mustOpenModal: false
        }),
        methods: {
            openModal() {
                this.mustOpenModal = true
            },
            closeModal() {
                this.mustOpenModal = false
            }
        }
    }
</script>

<style scoped lang="scss">
    .company-data-container {
        border: 1px solid #D4D9E3;
        border-radius: 4px;
        background-color: #FFF;
        padding: 28px;
        p {
            margin: 0px 0px 28px 0px;
        }
        .input-container, .range-input-container {
            margin-bottom: 28px;
        }
        .buttons-container {
            display: flex;
            justify-content: flex-end;
        }
    }
</style>
