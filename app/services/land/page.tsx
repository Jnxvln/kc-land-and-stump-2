import PageTitle from '@/app/(ui)/page/PageTitle/PageTitle'
import PageParagraph from '@/app/(ui)/page/SectionParagraph'
import styles from './Land.module.scss'

export default function LandClearing () {
	return (
		<section className={styles.container}>
			<PageTitle isCentered>Land Clearing</PageTitle>
			<PageParagraph>
				This is the Land Clearing page. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corporis beatae culpa, ratione ea placeat?
			</PageParagraph>
		</section>
	)
}