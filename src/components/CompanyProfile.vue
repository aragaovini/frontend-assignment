<template>
    <div class="profile-container">
        <div class="image">
            <img :src="require(`Images/${companyImage}`)"/>
        </div>
        <div>
            <div class="company">{{ company }}</div>
            <div class="location">{{ location }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CompanyProfile',
        props: {
            companyImage: {
                type: String
            },
            company: {
                type: String
            },
            location: {
                type: String
            }
        }
    }
</script>

<style scoped lang="scss">
    .profile-container {
        display: flex;
        .image {
            background-color: #FFF;
            border-radius: 4px;
            box-shadow: 1px 1px 5px #cecece;
            padding: 10px 10px 6px 10px;
            margin-right: 18px;
        }
        .company {
            font-size: 24px;
            margin-bottom: 12px;
        }
        .location {
            font-size: 12px;
            color: #B1B1B1;
        }
    }
</style>