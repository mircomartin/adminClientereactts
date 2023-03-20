import { createContext } from 'react';
import { Client } from "../interfaces/interfaces";

interface ContextProps {
	clients: Client[];
	client: Client;
	error: string;

	//Methods
	addNewClient: (client: Client) => void;
	deleteClient: (client: Client) => void;
	getCurrentClient: (clientId: number) => Promise<void>;
	setError: (error: string) => void;
}

export const ClientsContext = createContext({} as ContextProps )