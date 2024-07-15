import styles from './SectionParagraph.module.scss'

interface IParagraph {
	children: React.ReactNode
	isLead?: boolean
	isCentered?: boolean
	marginAuto?: boolean
	padding?: "sm" | "md" | "lg" | "xl" | undefined
	fullWidth?: boolean
}

export default function SectionParagraph ({ children, isLead, isCentered, marginAuto, padding, fullWidth }: IParagraph) { 
	return (
		// <p className={`p-3 ${isLead && 'text-2xl'} ${isCentered && 'text-center'} text-lg max-w-5xl ${marginAuto && 'mx-auto'}`}>{children}</p>

		<div className={`${styles.paragraph} ${isLead && styles.lead} ${isCentered && styles.centered} ${marginAuto && styles.marginAuto} ${padding && styles[`padding-${padding}`]} ${fullWidth && styles.fullWidth}`}>
			{children}		
		</div>
	)
}