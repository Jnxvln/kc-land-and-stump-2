import PageTitle from '@/app/(ui)/page/PageTitle/PageTitle'
import PageParagraph from '@/app/(ui)/page/SectionParagraph'
import styles from './Dirt.module.scss'

export default function DirtWork () {
	return (
		<section className={styles.container}>
			<PageTitle isCentered>Dirt Work</PageTitle>
			<PageParagraph>
				This is the dirt work page. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corporis beatae culpa, ratione ea placeat?
			</PageParagraph>
		</section>
	)
}