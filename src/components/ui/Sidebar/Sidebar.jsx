import { useSidebar } from './hooks/useSidebar'
import { animated } from '@react-spring/web'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { sidebarDataBottomRoutes } from './data/sidebarDataBottomRoutes'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { sidebarDataRoutes } from './data/sidebarDataRoutes'
import cn from 'classnames'
import PersonAk from './profile/information-person/InformationPerson'
import ComponentBody from './component-body/ComponentBody'
import ComponentSettings from './component-setting/ComponentSettings'
import Profile from './profile/Profile'
import logo from '../../../assets/logo.png'
import styles from './Sidebar.module.scss'

const Sidebar = () => {
	const { ref, isShow: isOpenedProfile, setIsShow: setIsOpenedProfile } = useOnClickOutside(false)

	const {
		isOpened,
		isDark,
		setIsDark,
		toggleSidebar,
		goToRoute,
		appearanceLogo,
		appearanceProfile
	} = useSidebar()

	return (
		<div
			className={cn(styles.sidebar, {
				[styles.opened]: !isOpened,
				[styles.dark]: isDark
			})}
		>
			<button
				className={cn(styles.buttonTheme, {
					[styles.dark]: isDark
				})}
				onClick={() => setIsDark(!isDark)}
			>
				<FontAwesomeIcon icon='fa-solid fa-circle-half-stroke' />
			</button>

			{/* ==============header============== */}

			<div
				className={cn(styles.header, {
					[styles.opened]: !isOpened
				})}
			>
				<animated.div
					style={appearanceLogo}
					className={cn(styles.logo, {
						[styles.opened]: !isOpened
					})}
				>
					<a href='/'>
						<img src={logo} alt='TensorFlow logo' />
						<span>TensorFlow</span>
					</a>
				</animated.div>

				<button
					className={cn(styles.buttonSizeSidebar, {
						[styles.dark]: isDark,
						[styles.opened]: !isOpened
					})}
					onClick={toggleSidebar}
				>
					<FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
				</button>
			</div>

			{/* ==============body============== */}

			<div className={styles.body}>
				<ComponentBody
					sidebarDataRoutes={sidebarDataRoutes}
					isOpened={isOpened}
					goToRoute={goToRoute}
					isOpenedProfile={isOpenedProfile}
				/>

				<ComponentSettings
					sidebarDataBottomRoutes={sidebarDataBottomRoutes}
					isOpened={isOpened}
					goToRoute={goToRoute}
					isOpenedProfile={isOpenedProfile}
				/>
			</div>

			{/* ==============profile============== */}

			<animated.div
				style={appearanceProfile}
				className={cn(styles.profile, {
					[styles.opened]: !isOpened,
					[styles.dark]: isDark
				})}
				ref={ref}
			>
				<div className={styles.profileInner}>
					<PersonAk
						isOpened={isOpened}
						setIsOpenedProfile={setIsOpenedProfile}
						isOpenedProfile={isOpenedProfile}
						disableInfo={{ display: !isOpened ? 'none' : 'block' }}
					/>

					<button
						className={cn(styles.profileBtn, {
							[styles.opened]: !isOpened,
							[styles.dark]: isDark
						})}
						onClick={() => setIsOpenedProfile(!isOpenedProfile)}
					>
						<FontAwesomeIcon
							icon={
								!isOpenedProfile ? ['fa-solid', 'fa-chevron-up'] : ['fa-solid', 'fa-chevron-down']
							}
						/>
					</button>
				</div>

				<Profile
					isOpened={isOpened}
					customStyles={{ display: !isOpenedProfile ? 'none' : 'block' }}
					goToRoute={goToRoute}
					setIsOpenedProfile={setIsOpenedProfile}
				/>
			</animated.div>
		</div>
	)
}

export default Sidebar
