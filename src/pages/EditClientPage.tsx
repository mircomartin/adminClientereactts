import { useContext, useEffect } from 'react'
import { useParams, useNavigate  } from "react-router-dom";
import { FormClient } from "../components/FormClient";
import { ClientsContext } from "../context"

export const EditClientPage = () => {

	const { getCurrentClient } = useContext( ClientsContext );

	const { id } = useParams ();
	const navigate = useNavigate() 

	useEffect(() => {

		getCurrentClient( Number(id) )
		
	}, [])
	
	return (
		<>
			<h1 className="font-black text-4xl text-blue-900">Edit Client</h1>
			<div className="flex justify-between items-center">
				<p className="mt-3">Edit the fields.</p>
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
