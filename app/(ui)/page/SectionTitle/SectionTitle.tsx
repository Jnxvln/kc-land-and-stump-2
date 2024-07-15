import { ICenterable } from "@/app/interfaces"
import styles from './SectionTitle.module.scss'

export default function SectionTitle ({ children, isCentered }: ICenterable) { 
	return (
		<h1 className={`${styles.sectionTitle} ${isCentered && 'text-center'}`}>{children}</h1>
	)
}