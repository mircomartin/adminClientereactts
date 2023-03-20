import { useNavigate } from "react-router-dom"
import { FormClient } from "../components/FormClient";

export const NewClientPage = () => {

	const navigate = useNavigate();

	return (
		<>
			<h1 className="font-black text-4xl text-blue-900">New Client</h1>
			<div className="flex justify-between items-center">
				<p className="mt-3">Complete all the fields to add a new client.</p>
				<button
					type="button"	
					className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
					onClick={() => navigate(-1)}
				>
					Back
				</button>
			</div>

			<div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">
				<FormClient />
			</div>
		</>
	)
}
