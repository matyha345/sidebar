import useTheme from '../../../hooks/useTheme'
import cn from 'classnames'
import PersonAk from './information-person/InformationPerson'
import { profileDataLinks } from './data/profileDataLinks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Profile.module.scss'

const Profile = ({ customStyles, goToRoute, isOpened, ref }) => {
	const { isDark } = useTheme()

	return (
		<div
			className={cn(styles.wrapper, {
				[styles.opened]: !isOpened,
				[styles.dark]: isDark
			})}
			style={customStyles}
		>
			{!isOpened && <PersonAk cursorDefault={{ cursor: 'default' }} disableClick={true} />}

			<div
				className={cn(styles.links, {
					[styles.opened]: !isOpened,
					[styles.dark]: isDark
				})}
			>
				{profileDataLinks.map((item, index) => (
					<div
						key={`_${item.title}`}
						className={cn(styles.link, {
							[styles.opened]: !isOpened,
							[styles.dark]: isDark
						})}
						onClick={() => goToRoute(item.path)}
					>
						<p>{item.title}</p>
					</div>
				))}
			</div>

			<div
				className={cn(styles.logout, {
					[styles.dark]: isDark
				})}
			>
				<p className={styles.logoutText}>Logout</p>
				<FontAwesomeIcon icon='fa-solid fa-right-from-bracket' />
			</div>
			<div className={styles.version}>
				<p>v 1.0.34</p>
				<p>Terms and Conditions</p>
			</div>
		</div>
	)
}

export default Profile
