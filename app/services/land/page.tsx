import PageTitle from '@/app/(ui)/page/PageTitle/PageTitle'
import SectionParagraph from '@/app/(ui)/page/SectionParagraph/SectionParagraph'
import Image from 'next/image'
import styles from './Land.module.scss'
import FreeEstimatesCallToday from '@/app/home/FreeEstimatesCallToday/FreeEstimatesCallToday'
import FacebookButton from '@/app/(ui)/FacebookButton/FacebookButton'

export default function LandClearing () {
	return (
		<>
			<section className={styles.container}>
				<PageTitle isCentered>Land Clearing</PageTitle>

				<article className={styles.article}>
					<div className={styles.paragraph}>
						<SectionParagraph padding="sm" fullWidth>
							Whether it&apos;s bush-hogging, clearing brush, grading, or hauling, I&apos;ve got you covered!
						</SectionParagraph>
					</div>

					<div className={styles.imageContainer}>
						<Image src="/images/services/land/land-i381u.jpg" alt="Land clearing" fill />
					</div>
				</article>

				<article className={`${styles.article} ${styles.flexReverse}`}>
					<div className={styles.paragraph}>
						<SectionParagraph padding="sm" fullWidth>
							I use tractor attachments like bush hogs, loaders, and grapples to clear small to medium-sized areas of vegetation and small trees.
							Call today for a free estimate.
						</SectionParagraph>
						<br/>
						<FacebookButton />
					</div>
					<div className={`${styles.imageContainer}`}>
						<Image src="/images/services/land/land-d8528rjua.jpg" alt="Land clearing" fill />
					</div>
				</article>
			</section>
			<FreeEstimatesCallToday />
		</>
	)
}