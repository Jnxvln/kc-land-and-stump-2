import DebugBorder from "../utils/DebugBorder"

interface IParagraph {
	children: React.ReactNode
	isLead?: boolean
}

const PageParagraph = ({ children, isLead }: IParagraph) => (
	<DebugBorder>
		<p className={`p-3 ${isLead && 'text-xl'} max-w-xl mx-auto border-2 border-dashed border-cyan-700`}>{children}</p>
	</DebugBorder>
)

export default PageParagraph