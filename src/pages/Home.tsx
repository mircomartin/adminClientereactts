import { useContext } from "react";
import { Error } from "../components/Error";
import { ListClients } from "../components/ListClients";
import { ClientsContext } from "../context";

export const Home = () => {

	const { error } = useContext(ClientsContext)

	if( error.length > 0 ) {
		return <Error error={ error } />
	}

	return (
		<>
			<h1 className="font-black text-4xl text-blue-400">Clients</h1>
			<p className="mt-3">Customize your clients.</p>
			<ListClients />
		</>
	)
}
