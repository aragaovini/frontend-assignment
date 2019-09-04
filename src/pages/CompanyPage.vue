<template>
    <div>
        <div>
            <CompanyProfile company="Microsoft" location="Redmond, WA USA" companyImage="microsoft.png" />
        </div>
        <div class="details">
            <p>At Microsoft, our mission is to empower every person and every organization on the planet to achieve more.</p>
            <p>Our mission is grounded in both the world in which we live and the future we strive to create. <a href="#">View more...</a></p>
        </div>
        <div class="grid-cards">
            <Card class="activities-card" title="Activities">
                <div class="activities-container">
                    <div v-for="(activity, index) in activitiesItems" class="activity-item" :key="index">
                        <div class="activity-day">{{ activity.day }}</div>
                        <div class="activity-detail">
                            <img :src="require(`Images/${activity.image}`)"/>
                            <div>{{ activity.description }}</div>
                        </div>
                    </div>
                </div>
            </Card>
            <div class="grid-cards-details">
                <Card title="Similar Companies">
                    <div class="company-item" v-for="(company, index) in similarCompanies" :key="index">
                        <div>
                            <img :src="require(`Images/logos/${company.image}`)"/>
                            <div class="company-description">{{ company.description }}</div>
                        </div>
                    </div>
                </Card>
                <Card class="graph-card" title="Company Spend History">
                    <div class="graph-container">
                        <div class="graph"></div>
                    </div>
                </Card>
                <Card title="Company Spend History">
                    <div class="company-item" v-for="(company, index) in companySpendHistory" :key="index">
                        <div>
                            <img :src="require(`Images/logos/${company.image}`)"/>
                            <div>
                                <div class="company-description">{{ company.description }}</div>
                                <div>{{ company.subdescription }}</div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </div>
</template>

<script>
    import CompanyProfile from 'Components/CompanyProfile.vue'
    import Card from 'Components/Card.vue'
    export default {
        name: 'CompanyPage',
        components: {
            CompanyProfile,
            Card
        },
        data: () => ({
            activitiesItems: [
                {
                    day: '8 days ago',
                    image: 'video-platform.png',
                    description: 'Cloud Ochestration replaced Microsoft on 1 property'
                },
                {
                    day: '10 days ago',
                    image: 'content-delivery.png',
                    description: 'Express Scripts replaced Microsoft on 1 property'
                },
                {
                    day: '12 days ago',
                    image: 'waf-d-dos-security.png',
                    description: 'Kaiser Permanente replaced Microsoft on 1 property'
                },
                {
                    day: '14 days ago',
                    image: 'traffic-management.png',
                    description: 'Molina Healthcare replaced Microsoft on 1 property'
                },
                {
                    day: '15 days ago',
                    image: 'dns.png',
                    description: 'Express Scripts replaced Microsoft on 1 property'
                },
                {
                    day: '16 days ago',
                    image: 'performance-monitoring.png',
                    description: 'Kaiser Permanente replaced Microsoft on 1 property'
                },
                {
                    day: '17 days ago',
                    image: 'saas.png',
                    description: 'Molina Healthcare replaced Microsoft on 1 property'
                },
                {
                    day: '18 days ago',
                    image: 'content-delivery.png',
                    description: 'Microsoft launched M-Cloud'
                }
            ],
            similarCompanies: [
                {
                    image: 'aws.png',
                    description: 'Amazon Web Services (AWS)'
                },
                {
                    image: 'oracle.png',
                    description: 'Oracle Comporation'
                }
            ],
            companySpendHistory: [
                {
                    image: 'gcp.png',
                    description: 'Google Cloud Platform,',
                    subdescription: 'Microsoft spend on product $500,000'
                },
                {
                    image: 'century.png',
                    description: 'CenturyLink CDN,',
                    subdescription: 'Microsoft spend on product $300,000'
                }
            ]
        })
    }
</script>

<style scoped lang="scss">
    .details {
        margin: 28px 0px;
        p {
            line-height: 24px;
            margin: 4px 0px;
        }
    }

    .grid-cards {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 16px;
        color: #656565;
        @media (max-width: 950px) {
            grid-template-columns: 1fr;
        }
        .grid-cards-details {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            grid-gap: 16px;
            display: grid;
        }
    }

    .activities-card {
        display: flex;
        flex-direction: column;
        .activities-container {
            display: grid;
            flex: 1;
            .activity-item {
                display: flex;
                border-bottom: 1px solid #D4D9E3;
                padding: 14px;
                align-items: center;
                .activity-day {
                    min-width: 100px;
                }
                img {
                    width: 20px;
                    margin-right: 18px;
                }
                .activity-detail {
                    display: flex;
                    align-items: center;
                }
            }
        }
        
    }
    
    .company-item {
        padding: 8px;
        > div {
            padding: 8px;
            display: flex;
            align-items: center;
            .company-description {
                color: #6E79A5;
            }
            img {
                margin-right: 14px;
                width: 50px;
            }
        }
    }
     

    .graph-card {
        display: flex;
        flex-direction: column;
        .graph-container {
            display: flex;
            flex: 1;
            flex-direction: column;
            padding: 28px;
            .graph {
                background-color: #D2F4EA;
                flex: 1;
            }
        }
    }
</style>
