import { appSettings } from "../../appData"
import styles from './FreeEstimates.module.scss'

export default function FreeEstimates () { 
	return (
		<section className={`${styles.container} ${styles.overlay}`}>
			<div className="flex flex-col justify-center h-full">
				<h2 className="font-bold text-3xl text-yellow-500 text-center">Free Estimates</h2>
				<div className="font-bold text-center text-white">{appSettings.companyPhone}</div>
			</div>
		</section>
	)
}