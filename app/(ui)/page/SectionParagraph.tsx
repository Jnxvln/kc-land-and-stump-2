interface IParagraph {
	children: React.ReactNode
	isLead?: boolean
	marginAuto?: boolean
}

export default function PageParagraph ({ children, isLead, marginAuto }: IParagraph) { 
	return (
		<p className={`p-3 ${isLead && 'text-2xl'} text-lg max-w-xl ${marginAuto && 'mx-auto'}`}>{children}</p>
	)
}