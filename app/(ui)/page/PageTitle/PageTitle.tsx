import { ICenterable } from "@/app/interfaces"
import { Bree_Serif } from 'next/font/google'
import styles from './PageTitle.module.scss'

const fontBreeSerif = Bree_Serif({
	subsets: ['latin'],
	weight: '400',
});

export default function PageTitle ({ children, isCentered }: ICenterable) {
	return (
		<h1 className={`${styles.title} ${isCentered && 'text-center'} ${fontBreeSerif.className}`}>{children}</h1>
	)
}