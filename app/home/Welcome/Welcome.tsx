import SectionParagraph from "../../(ui)/page/SectionParagraph"
import PageTitle from "../../(ui)/page/PageTitle/PageTitle"
import styles from './Welcome.module.scss'

export default function Welcome () {
  return (
	<section className={`px-2 py-8 ${styles.container} ${styles.overlay}`}>
		<PageTitle isCentered>Welcome</PageTitle>
		<SectionParagraph isLead marginAuto>
			I provide quality tractor services, including minor dirt work, 
			stump grinding, gravel spreading and bush hogging, in and around 
			the Atlanta, Texas region.
		</SectionParagraph>
	</section>
  )
}