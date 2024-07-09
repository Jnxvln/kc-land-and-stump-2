import { appSettings } from "../appData"

const FreeEstimates = () => (
	<section>
		<div className="flex flex-col gap-1">
			<h2 className="font-bold text-3xl text-yellow-500 text-center">Free Estimates</h2>
			<div className="font-bold text-center text-white">{appSettings.companyPhone}</div>
		</div>
	</section>
)

export default FreeEstimates