import Link from "next/link";
import Image from "next/image";
import PageTitle from "../(ui)/page/PageTitle/PageTitle";
import SectionParagraph from "../(ui)/page/SectionParagraph/SectionParagraph";
import styles from './Services.module.scss'

export interface IService {
	id: string | number;
	name: string;
	href: string;
	image?: string;
}

export default function Services () {
	const services: IService[] | [] = [
		{
			id: 'Mc82HFa05mn2ysu8cu',
			name: 'Stump Grinding',
			href: '/services/stump',
			image: '/images/services/stump/stump-d81_resample.jpg'
		},
		{
			id: 'b6dGle01ZiDbwq8',
			name: 'Dirt Work',
			href: '/services/dirt',
			image: '/images/services/dirtwork/dirtwork-fi1ds_resample.jpg'
		},
		{
			id: 'Gqn3XhgR9chQp43h',
			name: 'Landing Clearing',
			href: '/services/land',
			image: '/images/services/land/land-i381u_resample.jpg'
		},
		{
			id: 'NjJ95xlaifh1b9xjGf',
			name: 'Gravel Spreading',
			href: '/services/gravel',
			image: '/images/services/gravel/gravel-k3401_resample.jpg'
		}
	]

	const NoLinks = () => (
		<div className="text-lg font-bold p-2">No links yet! Come back soon.</div>
	)

	return (
		<section className={styles.container}>
			<PageTitle isCentered>
				Services
			</PageTitle>
			<br/>
			<SectionParagraph isLead marginAuto>
				I provide a variety of services including stump grinding, minor dirt work, land clearing, bush-hogging,
				spreading gravel, hauling, and more.
			</SectionParagraph>

			<br/>

			<div className="m-2">
				<div className={styles.linksContainer}>
					{ services?.length > 0 ? services.map(service => (
						<Link key={service.id} href={service.href} className={styles.serviceLink}>					
							<section  className={styles.serviceContainer}>
								<div className={styles.leftSide}>
									<Image src={service.image ? service.image : ''} alt={service.name} className={styles.image} fill />
								</div>

								<div className={styles.rightSide}>
									<h4 className={styles.serviceName}>{service.name}</h4>
								</div>
							</section>
						</Link>
					)) : (
						<NoLinks />
					) }
				</div>
			</div>
		</section>
	)
}