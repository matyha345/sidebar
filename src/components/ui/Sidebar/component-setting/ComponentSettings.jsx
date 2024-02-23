import { animated, useTransition } from '@react-spring/web'
import useTheme from '../../../hooks/useTheme'
import cn from 'classnames'
import styles from './ComponentSettings.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ComponentSettings = ({ sidebarDataBottomRoutes, isOpened, goToRoute,isOpenedProfile }) => {
	const { isDark } = useTheme()

	let animationProps

	if (!isOpened) {
		animationProps = {
			from: { opacity: 0, transform: 'translateX(-100px)' },
			enter: { opacity: 1, transform: 'translateX(0px)' }
		}
	} else if (isOpenedProfile) {
		animationProps = {
			from: { opacity: 0.8 },
			enter: { opacity: 1 }
		}
	} else {
		animationProps = {
			from: { opacity: 0, transform: 'translateY(100px)' },
			enter: { opacity: 1, transform: 'translateY(0px)' }
		}
	}

	const transitionsBottom = useTransition(sidebarDataBottomRoutes, {
		keys: item => item.key,
		...animationProps,
		config: { duration: 500 },
		trail: 100
	})

	return (
		<div className={styles.settings}>
			{transitionsBottom((style, route) => (
				<animated.div
					style={style}
					className={cn(styles.settingsLinks, {
						[styles.opened]: !isOpened,
						[styles.dark]: isDark
					})}
					key={route.title}
					onClick={() => goToRoute(route.path)}
				>
					<FontAwesomeIcon icon={route.icon} />
					<span
						className={cn(styles.settingsText, {
							[styles.opened]: !isOpened
						})}
					>
						{route.title}
					</span>
				</animated.div>
			))}
		</div>
	)
}
export default ComponentSettings
