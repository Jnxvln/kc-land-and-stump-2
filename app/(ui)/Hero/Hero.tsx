import styles from './Hero.module.scss'
import { Bree_Serif } from 'next/font/google'

const fontBreeSerif = Bree_Serif({
	subsets: ['latin'],
	weight: '400',
});

export default function Hero () {
  return (
	<section className={`${styles.container} ${styles.overlay}`}>
		<div className={styles.titleContainer}>
			<h1 className={`${styles.title} ${fontBreeSerif.className}`}>KC Land</h1>
			<h1 className={`${styles.title} ${fontBreeSerif.className}`}>&amp; Stump</h1>
		</div>
	</section>
  )
}