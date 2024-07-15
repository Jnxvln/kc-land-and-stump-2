import { appSettings } from "@/app/appData";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";

export default function FacebookButton () {
	return (
		<Link href={appSettings.facebookUrl} target="_blank">		
			<div className="bg-[#143c55] hover:bg-[#15496a] text-xl flex gap-3 items-center justify-center transition-colors duration-300 ease-in-out p-3 w-full mx-auto rounded-lg text-center font-bold text-white">
				<span><FaFacebookSquare /> </span>Find Me On Facebook
			</div>
		</Link>
	)
}