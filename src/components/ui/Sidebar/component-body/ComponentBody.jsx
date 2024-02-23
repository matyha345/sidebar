import { animated, useTransition } from '@react-spring/web'
import styles from './ComponentBody.module.scss'
import useTheme from '../../../hooks/useTheme'
import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ComponentBody = ({ sidebarDataRoutes, isOpened, goToRoute, isOpenedProfile }) => {
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
			from: { opacity: 0, transform: 'translateY(-100px)' },
			enter: { opacity: 1, transform: 'translateY(0px)' }
		}
	}

	const transitions = useTransition(sidebarDataRoutes, {
		keys: item => item.key,
		...animationProps,
		config: { duration: 500 },
		trail: 100
	})



	return (
		<div className={styles.links}>
			{transitions((style, route) => {
				return (
					<animated.div
						style={style}
						className={cn(styles.link, {
							[styles.dark]: isDark,
							[styles.opened]: !isOpened,
							[styles.activeTab]: route.isActive && route.isActive.tab,
							[styles.activeEmail]: route.isActive && route.isActive.email
						})}
						key={route.title}
						onClick={() => goToRoute(route.path)}
					>
						<FontAwesomeIcon icon={route.icon} />
						<span
							className={cn(styles.linkText, {
								[styles.opened]: !isOpened
							})}
						>
							{route.title}
						</span>
					</animated.div>
				)
			})}
		</div>
	)
}
export default ComponentBody
