import PageTitle from '@/app/(ui)/page/PageTitle/PageTitle'
import SectionParagraph from '@/app/(ui)/page/SectionParagraph/SectionParagraph'
import Image from 'next/image'
import styles from './Stump.module.scss'
import FreeEstimatesCallToday from '@/app/home/FreeEstimatesCallToday/FreeEstimatesCallToday'
import FacebookButton from '@/app/(ui)/FacebookButton/FacebookButton'

export default function StumpGrinding () {
	return (
		<>		
			<section className={styles.container}>
				<PageTitle isCentered>Stump Grinding</PageTitle>

				<article className={styles.article}>
					<div className={styles.paragraph}>
						<SectionParagraph padding="sm" fullWidth>
							Stumps can be a real hassle to deal with and quickly destroy the aesthetics of your property.
						</SectionParagraph>
					</div>

					<div className={styles.imageContainer}>
						<Image src="/images/services/stump/stump-fdi2.jpg" alt="Stump grinding" fill />
					</div>
				</article>

				<article className={`${styles.article} ${styles.flexReverse}`}>
					<div className={styles.paragraph}>
						<SectionParagraph padding="sm" fullWidth>
							I can provide stump grinding and removal services depending on your project size and location.
							Call today for a free estimate.
						</SectionParagraph>
						<br/>
						<FacebookButton />
					</div>
					<div className={`${styles.imageContainer}`}>
						<Image src="/images/services/stump/stump-ckuh.jpg" alt="Stump grinding" fill />
					</div>
				</article>
			</section>
			<FreeEstimatesCallToday />
		</>
	)
}