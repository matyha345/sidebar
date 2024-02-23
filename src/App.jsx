import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { ThemeProvider } from './providers/ThemeProvider'
import Layout from './components/layout/Layout'
import Sidebar from './components/ui/Sidebar/Sidebar'


library.add(fas)

const App = () => {
	return (
		<ThemeProvider>
			<Layout>
				<Sidebar />
			</Layout>
		</ThemeProvider>
	)
}

export default App
