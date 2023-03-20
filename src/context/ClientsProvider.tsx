import {  useEffect, useReducer } from 'react';
import { getAllClientsFromApi, getClientFromApi, postClientToApi } from "../helpers/helper";
import { Client } from '../interfaces/interfaces';
import { ClientsContext } from './';
import { clientsReducer } from "./clientsReducer";

interface ClientsProviderProps {
	children: React.ReactNode;
}

export interface ClientsState {
	clients: Client[];
	client: Client;
	error: string;
}

const Clients_INITIAL_STATE: ClientsState = {
	clients: [],
	client: {
		"id": 0,
    "nombre": "",
    "telefono": 0,
    "email": '',
    "empresa": '',
	},
	error: '',
}

export const ClientsProvider = ( { children }: ClientsProviderProps ) => {

	const [state, dispatch] = useReducer(clientsReducer , Clients_INITIAL_STATE)

	useEffect(() => {

		getAllClientsFromApi()
			.then(getAllClients)
			.catch(function (error) {
				setError(error.message);
			});
		
	}, [])
	
	const getAllClients = ( clients: Client[] ) => {
		dispatch({
			type: 'Clients - Get All Clients',
			payload: clients
		})
	}

	const addNewClient = ( client: Client ) => {

		postClientToApi( client )

		dispatch({
			type: 'Clients - Add',
			payload: client,
		})

	}

	const deleteClient = ( client: Client ) => {
		dispatch({
			type: 'Clients - Delete Client',
			payload: client,
		})
	}

	const getCurrentClient = async ( clientId: number ) => {

		const resp = await getClientFromApi( clientId )
		console.log(resp)

		dispatch({
			type: 'Clients - Current Client',
			payload: resp,
		})
	}

	const setError = ( error: string ) => {
		dispatch({
			type: 'Clients - Error',
			payload: error,
		})
	}

	return (
		<ClientsContext.Provider value={{
			...state,
			
			//Methods
			addNewClient,
			deleteClient,
			getCurrentClient,
			setError
		}}>
			{ children }
		</ClientsContext.Provider>
	)
}