import SectionParagraph from "../(ui)/page/SectionParagraph"
import PageTitle from "../(ui)/page/PageTitle"
import DebugBorder from "../(ui)/utils/DebugBorder"

const Welcome = () => {
  return (
	<section>
		<DebugBorder>
			<PageTitle isCentered>Welcome</PageTitle>
			<SectionParagraph isLead>
				I provide quality tractor services, including minor dirt work, 
				stump grinding, gravel spreading and bush hogging, in and around 
				the Atlanta, Texas region.
			</SectionParagraph>
		</DebugBorder>
	</section>
  )
}

export default Welcome