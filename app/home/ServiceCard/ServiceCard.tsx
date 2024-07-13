import Link from 'next/link';
import styles from './ServiceCard.module.scss'

export interface IServiceCard  {
	title: string;
	description: string;
	descriptionCenter?: boolean;
	ctaText: string;
	ctaUrl: string;
	serviceType: "stump" | "dirt" | "land" | "gravel" | "hauling";
	ctaBgcolor?: string;
}

export default function ServiceCard ({ title, description, descriptionCenter, ctaText, ctaUrl, ctaBgcolor, serviceType }: IServiceCard) {
	return (
		<section className={`${styles.hero} ${styles.overlay} ${styles[`svc-${serviceType}`]}`}>
			<h2 className={styles.title}>{title}</h2>
			
			<div className={`${styles.description} ${descriptionCenter && 'text-center'}`}>			
				{description}
			</div>

			<div className={styles.ctaContainer}>
				<Link 
					href={ctaUrl} 
					className={`
						${styles.ctaLink} 
						${ctaBgcolor && ctaBgcolor.length > 0 ? ctaBgcolor : ''}
					`}
				>
					{ctaText}
				</Link>
			</div>
		</section>
	)
}