import DebugBorder from "../utils/DebugBorder"
import { ICenterable } from "@/app/interfaces"

const SectionTitle = ({ children, isCentered }: ICenterable) => (
	<DebugBorder>
		<h1 className={`font-bold font-3xl my-3 ${isCentered && 'text-center'}`}>{children}</h1>
	</DebugBorder>
)

export default SectionTitle