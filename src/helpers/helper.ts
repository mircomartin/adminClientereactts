import axios from "axios"
import { Client } from "../interfaces/interfaces"

export const getAllClientsFromApi = async (): Promise<Client[]> => {
	
	const { data } = await axios.get('http://localhost:3000/clients');
	return data

}

export const postClientToApi = async ( client: Client ): Promise<Client> => {

	const url = 'http://localhost:3000/clients';
	// Specifying headers in the config object
	
	const { data } = await axios.post( url, client );
	return data

}

export const getClientFromApi = async ( id: number ): Promise<Client> => {

	const url = `http://localhost:3000/clients/${ id }`;
	
	const { data } = await axios.get(url);

	return data

}