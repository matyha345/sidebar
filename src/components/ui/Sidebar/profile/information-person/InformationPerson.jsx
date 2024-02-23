import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import useTheme from '../../../../hooks/useTheme'
import styles from './InformationPerson.module.scss'

const InformationPerson = ({
	isOpened,
	isOpenedProfile,
	setIsOpenedProfile,
	disableInfo,
	cursorDefault,
	disableClick
}) => {
	const [shortName, setShortName] = useState('')

	const { isDark } = useTheme()
	useEffect(() => {
		const name = 'Mark Talbierz'
		const newName = name.slice(0, 6)
		setShortName(newName)
	}, [])

	return (
		<div
			className={cn(styles.person, {
				[styles.opened]: !isOpened,
				[styles.dark]: isDark
			})}
			style={cursorDefault}
			onClick={() => (disableClick ? null : setIsOpenedProfile(!isOpenedProfile))}
		>
			<img src='/iconPerson.png' alt='Image Person' />

			<div
				style={disableInfo}
				className={cn(styles.info, {
					[styles.dark]: isDark
				})}
			>
				{isOpened && <span>User Account</span>}
				<h2>{shortName}</h2>
				{!isOpened && (
					<a className={styles.linkInfo} href='mailto:hello@test.ru'>
						hello@test.ru
					</a>
				)}
			</div>
		</div>
	)
}

export default InformationPerson
