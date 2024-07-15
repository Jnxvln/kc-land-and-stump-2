import { appSettings } from "../../appData"
import { Bree_Serif } from 'next/font/google'
import styles from './FreeEstimatesCallToday.module.scss'

const fontBreeSerif = Bree_Serif({
	subsets: ['latin'],
	weight: '400',
});


export default function FreeEstimatesCallToday () {
	return (
		<section className={styles.container}>

			{/* Free Estimates */}
			<div className={`${styles.estimateContainer} ${styles.overlay}`}>
				<div className={styles.estimateContent}>
					<h2 className={`${styles.estimateTitle} ${fontBreeSerif.className}`}>Free Estimates</h2>
					<div className={styles.phone}>{appSettings.companyPhone}</div>
				</div>
			</div>

			{/* Call Today */}
			<div className={styles.callContainer}>
				<div>Call</div>
				<div>Today</div>
			</div>
		</section>
	)
}