import { useContext } from "react";
import { ClientsContext } from "../context";
import { SingleClient } from "./SingleClient";

export const ListClients = () => {

	const { clients } = useContext(ClientsContext)

	return (
		clients.length > 0
		?
		<table className="w-full bg-white shadow mt-5 table-auto">
			<thead className="bg-blue-800 text-white">
				<tr>
					<th className="p-2">
						Name
					</th>
					<th className="p-2">
						Contact
					</th>
					<th className="p-2">
						Actions
					</th>
				</tr>
			</thead>
			<tbody>
			{
				clients.map( (client) => (
					<SingleClient key={ client.id } client={ client }/>
				))
			}
			</tbody>
		</table>
		:
		<p className="text-center mt-10">We cant find any client, you can add the first one.</p>
	)
}
