import PageTitle from '@/app/(ui)/page/PageTitle/PageTitle'
import SectionParagraph from '@/app/(ui)/page/SectionParagraph/SectionParagraph'
import Image from 'next/image'
import styles from './Gravel.module.scss'
import FreeEstimatesCallToday from '@/app/home/FreeEstimatesCallToday/FreeEstimatesCallToday'
import FacebookButton from '@/app/(ui)/FacebookButton/FacebookButton'

export default function GravelSpreading () {
	return (
		<>
			<section className={styles.container}>
				<PageTitle isCentered>Gravel Spreading</PageTitle>

				<article className={styles.article}>
					<div className={styles.paragraph}>
						<SectionParagraph padding="sm" fullWidth>
							Gravel is important in a variety of projects, including driveways, roads, patios, gardens, and more.
						</SectionParagraph>
					</div>

					<div className={styles.imageContainer}>
						<Image src="/images/services/gravel/gravel-k3401.jpg" alt="Gravel spreading" fill />
					</div>
				</article>

				<article className={`${styles.article} ${styles.flexReverse}`}>
					<div className={styles.paragraph}>
						<SectionParagraph padding="sm" fullWidth>
							I use an assortment of attachments on my tractor to transport, grade, and pack gravel into place. 
							Call today for a free estimate.
						</SectionParagraph>
						<br/>
						<FacebookButton />
					</div>
					<div className={`${styles.imageContainer}`}>
						<Image src="/images/services/gravel/gravel-x81s.jpg" alt="Gravel spreading" fill />
					</div>
				</article>
			</section>
			<FreeEstimatesCallToday />
		</>
	)
}