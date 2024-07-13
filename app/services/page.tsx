import Link from "next/link";
import PageTitle from "../(ui)/page/PageTitle/PageTitle";
import SectionParagraph from "../(ui)/page/SectionParagraph";
import styles from './Services.module.scss'

export interface IService {
	id: string | number;
	name: string;
	href: string;
}

export default function Services () {
	const services: IService[] | [] = [
		{
			id: 'Mc82HFa05mn2ysu8cu',
			name: 'Stump Grinding',
			href: '/services/stump'
		},
		{
			id: 'b6dGle01ZiDbwq8',
			name: 'Dirt Work',
			href: '/services/dirt'
		},
		{
			id: 'Gqn3XhgR9chQp43h',
			name: 'Landing Clearing',
			href: '/services/land'
		},
		{
			id: 'NjJ95xlaifh1b9xjGf',
			name: 'Gravel Spreading',
			href: '/services/gravel'
		}
	]

	const NoLinks = () => (
		<div className="text-lg font-bold p-2">No links yet! Come back soon.</div>
	)

	return (
		<section>
			<PageTitle isCentered>
				Services
			</PageTitle>
			<SectionParagraph marginAuto>
				Hello world, Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi a repellendus officia? Culpa, modi explicabo!
			</SectionParagraph>

			<div className={styles.linksContainer}>
				{ services?.length > 0 ? services.map(service => (
					<Link key={service.id} href={service.href} className={styles.serviceLink}>{service.name}</Link>
				)) : (
					<NoLinks />
				) }
			</div>
		</section>
	)
}