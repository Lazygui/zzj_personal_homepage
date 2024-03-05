import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/components/HelloWorld.vue'
import UnderMaintenance from '@/components/UnderMaintenance.vue'
import EchartsView from '@/components/portfolio/visualization/EchartsView.vue'

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
		path: '/echartsView',
		name: 'echartsView',
		component: EchartsView,
		meta: {
			displayName: '数据可视化展示',
			hideSelf: true,
			requiresAuth: false,
		},
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
