import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/HelloWorld.vue'
import UnderMaintenance from '@/components/UnderMaintenance.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'homePage',
		component: Home,
		meta: {
			displayName: '首页',
			hideSelf: true,
			requiresAuth: false,
		},
	},
	{
		path: '/portfolio',
		name: 'portfolio',
		redirect: '/portfolio/portfolioHome',
		children: [
			{
				path: 'portfolioHome', // 空路径表示默认子路由，访问/portfolio时将显示此子路由
				name: 'portfolioHome', // 可选，用于在编程式导航中引用
				component: () => import('@/components/PortfolioHome.vue'), // 你的 Portfolio 组件内容
				meta: {
					displayName: '作品集首页',
					requiresAuth: false,
				},
			},

			{
				path: 'echartsView',
				name: 'echartsView',
				component: () =>
					import('@/components/portfolio/visualization/EchartsView.vue'),
				meta: {
					displayName: '数据可视化展示',
					requiresAuth: false,
				},
			},
		],
	},
	{
		path: '/underMaintenance',
		name: 'underMaintenance',
		component: UnderMaintenance,
		meta: {
			displayName: '维护中',
			hideSelf: true,
			requiresAuth: false,
		},
	},
]
// 路由
const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes,
})
// 导出
export default router
