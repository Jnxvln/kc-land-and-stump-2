import PageTitle from '@/app/(ui)/page/PageTitle/PageTitle'
import PageParagraph from '@/app/(ui)/page/SectionParagraph'
import styles from './Stump.module.scss'

export default function StumpGrinding () {
	return (
		<section className={styles.container}>
			<PageTitle isCentered>Stump Grinding</PageTitle>
			<PageParagraph>
				This is the stump grinding page. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corporis beatae culpa, ratione ea placeat?
			</PageParagraph>
		</section>
	)
}