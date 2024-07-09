import { ICenterable } from "@/app/interfaces"
import DebugBorder from "../utils/DebugBorder"

const PageTitle = ({ children, isCentered }: ICenterable) => (
	<DebugBorder>
		<h1 className={`font-bold text-4xl my-4 ${isCentered && 'text-center'}`}>{children}</h1>
	</DebugBorder>
)

export default PageTitle