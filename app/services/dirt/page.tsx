import PageTitle from '@/app/(ui)/page/PageTitle/PageTitle'
import SectionParagraph from '@/app/(ui)/page/SectionParagraph/SectionParagraph'
import Image from 'next/image'
import styles from './Dirt.module.scss'
import FreeEstimatesCallToday from '@/app/home/FreeEstimatesCallToday/FreeEstimatesCallToday'
import FacebookButton from '@/app/(ui)/FacebookButton/FacebookButton'

export default function DirtWork () {
	return (
		<>
			<section className={styles.container}>
				<PageTitle isCentered>Minor Dirt Work</PageTitle>

				<article className={styles.article}>
					<div className={styles.paragraph}>
						<SectionParagraph padding="sm" fullWidth>
							Digging, spreading, and transporting dirt often involves a lot of time and hard work. 
							I can help you there!
						</SectionParagraph>
					</div>

					<div className={styles.imageContainer}>
						<Image src="/images/services/dirtwork/dirtwork-fi1ds.jpg" alt="Stump grinding" fill />
					</div>
				</article>

				<article className={`${styles.article} ${styles.flexReverse}`}>
					<div className={styles.paragraph}>
						<SectionParagraph padding="sm" fullWidth>
							I can accomodate small to mid-size projects with my tractor, truck, and trailer.
							Call today for a free estimate.
						</SectionParagraph>
						<br/>
						<FacebookButton />
					</div>
					<div className={`${styles.imageContainer}`}>
						<Image src="/images/services/dirtwork/dirtwork-cia03.jpg" alt="Stump grinding" fill />
					</div>
				</article>
			</section>
			<FreeEstimatesCallToday />
		</>
	)
}