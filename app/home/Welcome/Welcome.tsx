import SectionParagraph from "../../(ui)/page/SectionParagraph/SectionParagraph"
import PageTitle from "../../(ui)/page/PageTitle/PageTitle"
import styles from './Welcome.module.scss'

export default function Welcome () {
  return (
	<section className={`${styles.container} ${styles.overlay}`}>
		<PageTitle isCentered>Welcome</PageTitle>
		<SectionParagraph marginAuto padding="lg">
			I provide quality tractor services, including dirt work, 
			stump grinding, gravel spreading, and bush hogging around 
			the Atlanta, TX region.
		</SectionParagraph>
	</section>
  )
}