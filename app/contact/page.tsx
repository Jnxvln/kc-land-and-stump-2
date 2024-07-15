import Link from "next/link";
import PageTitle from "../(ui)/page/PageTitle/PageTitle";
import SectionParagraph from "../(ui)/page/SectionParagraph/SectionParagraph";
import { appSettings } from '../appData'
import { FaFacebookSquare } from "react-icons/fa";
import styles from './Contact.module.scss'
import FacebookButton from "../(ui)/FacebookButton/FacebookButton";

export default function Contact () {
  return (
	<section className={styles.container}>
		<PageTitle isCentered>Contact</PageTitle>

		<br/>

		<SectionParagraph isCentered marginAuto>
			Give me a call or reach out to me on Facebook, I&apos;m happy to help!
		</SectionParagraph>

		<br/>
		<br/>

		<section className="flex flex-col gap-3 max-w-xs mx-auto">
			<div className="bg-[#3d3328] p-3 w-full mx-auto rounded-lg text-center">
				<span className="font-bold text-yellow-500 text-xl">Phone:</span> <span className="font-bold text-xl text-white">{ appSettings.companyPhone }</span>
			</div>

			<FacebookButton />
		</section>

	</section>
  )
}