'use client'

import { useState, useEffect } from "react"
import styles from './Footer.module.scss'

export default function Footer () {

	const [beginYear] = useState(2023)
	const [currentYear, setCurrentYear] = useState(0)

	useEffect(() => {
		if (!currentYear) {
			const currentDate = new Date()
			const _currentYear = currentDate.getFullYear()
			setCurrentYear(_currentYear)
		}
	}, [])

	return (
		<footer className={styles.footer}>
			<div className={styles.copyright}>
				<div>&copy; Copyright {beginYear}-{currentYear} KC Land &amp; Stump</div>
				<div>All Rights Reserved</div>
			</div>
		</footer>
	)
}