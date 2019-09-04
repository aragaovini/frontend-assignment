import CompanyData from 'Pages/CompanyData.vue'
import CompanyPage from 'Pages/CompanyPage.vue'
import PageNotFound from 'Pages/PageNotFound.vue'

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
	},
	{
		path: '*',
		name: 'Page not found',
		component: PageNotFound
	}
]

export default routes
