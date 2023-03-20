import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ClientsContext } from "../context";
import { Client } from "../interfaces/interfaces"

interface SingleClientProps {
	client: Client;
}

export const SingleClient = ( { client }: SingleClientProps ) => {
	
	const navigate = useNavigate();
	const { deleteClient } = useContext( ClientsContext )

	return (
		<>
			<tr className="border-b">
				<td className="p-6 space-y-2">
					<p className="text-2xl text-gray-800">{ client.nombre }</p>
					<p>{ client.empresa }</p>
				</td>
				<td className="p-6">
					<p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Email:</span> { client.email }</p>
					<p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Tel:</span> { client.telefono }</p>
				</td>
				<td className="p-6 flex gap-3">
					<button
						type="button"
						className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
						onClick={() => navigate(`/client/${client.id}`)}
					>
						Edit
					</button>
					<button
						onClick={ () => deleteClient( client ) }
						type="button"
						className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
					>
						Delete
					</button>
				</td>
			</tr>
		</>
	)
}
