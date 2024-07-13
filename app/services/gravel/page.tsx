import PageTitle from '@/app/(ui)/page/PageTitle/PageTitle'
import PageParagraph from '@/app/(ui)/page/SectionParagraph'
import styles from './Gravel.module.scss'

export default function GravelSpreading () {
	return (
		<section className={styles.container}>
			<PageTitle isCentered>Gravel Spreading</PageTitle>
			<PageParagraph>
				This is the Gravel Spreading page. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corporis beatae culpa, ratione ea placeat?
			</PageParagraph>
		</section>
	)
}