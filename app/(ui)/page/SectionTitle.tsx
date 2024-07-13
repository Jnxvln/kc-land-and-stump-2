import { ICenterable } from "@/app/interfaces"

export default function SectionTitle ({ children, isCentered }: ICenterable) { 
	return (
		<h1 className={`font-bold font-3xl my-3 ${isCentered && 'text-center'}`}>{children}</h1>
	)
}