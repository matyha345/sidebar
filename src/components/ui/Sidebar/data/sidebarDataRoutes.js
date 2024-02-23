export const sidebarDataRoutes = [
	{ title: 'Home', icon: 'fas-solid fa-house', path: '/' },
	{ title: 'Sales', icon: 'chart-line', path: '/sales', isActive: { tab: true } },
	{ title: 'Costs', icon: 'chart-column', path: '/costs' },
	{ title: 'Payments', icon: 'wallet', path: '/payments' },
	{ title: 'Finances', icon: 'chart-pie', path: '/finances' },
	{ title: 'Messages', icon: 'envelope', path: '/messages', isActive: { email: true } }
]