import useTheme from '../hooks/useTheme'
import cn from 'classnames'
import GitHubInfo from './gitInfo/GitHubInfo'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
	const { isDark } = useTheme()
	return (
		<div
			className={cn(styles.wrapper, {
				[styles.dark]: isDark
			})}
		>
			{children}

			<GitHubInfo />
		</div>
	)
}

export default Layout
