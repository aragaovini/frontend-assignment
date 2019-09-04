import CompanyData from 'Pages/CompanyData.vue'
import CompanyPage from 'Pages/CompanyPage.vue'

const routes = [
    {
        path: '/',
        name: 'Company Data',
        component: CompanyData
    },
    {
        path: '/company-page',
        name: 'Company Page',
        component: CompanyPage
    }
]

export default routes
