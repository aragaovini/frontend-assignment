<template>
    <div class="company-data-container">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Input label="Company Name" type="text" v-model="companyName"/>
        <Input label="Company Spend" type="number" v-model="companySpend"/>
        <Input label="Company Spend Ability" type="text" v-model="companySpendAbility"/>
        <Textarea label="Notes" type="text" v-model="notes"/>

    </div>
</template>

<script>
    import Input from 'Components/Input.vue'
    import Textarea from 'Components/Textarea.vue'

    export default {
        name: 'CompanyData',
        components: {
            Input,
            Textarea
        },
        data: () => ({
            companyName: '',
            companySpend: 0,
            companySpendAbility: '',
            notes: ''
        })
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
    }
</style>
