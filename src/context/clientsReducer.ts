import { ClientsState } from './';
import { Client } from '../interfaces/interfaces';

type ClientsActionType =
| { type: 'Clients - Add', payload: Client }
| { type: 'Clients - Get All Clients', payload: Client[] }
| { type: 'Clients - Delete Client', payload: Client }
| { type: 'Clients - Current Client', payload: Client }
| { type: 'Clients - Error', payload: string }

export const clientsReducer = ( state: ClientsState, action: ClientsActionType ): ClientsState => {

	switch (action.type) {
		case 'Clients - Add':
			return {
				...state,
				clients: [ action.payload, ...state.clients ],
				client: {
					"id": 0,
					"nombre": "",
					"telefono": 0,
					"email": '',
					"empresa": '',
				},
			}
		case 'Clients - Get All Clients':
			return {
				...state,
				clients: action.payload,
				client: {
					"id": 0,
					"nombre": "",
					"telefono": 0,
					"email": '',
					"empresa": '',
				},
			}
		case 'Clients - Delete Client':
			return {
				...state,
				clients: state.clients.filter( ( client ) => {
					return client.id !== action.payload.id
				}),
			}
		case 'Clients - Current Client':
			return {
				...state,
				clients: state.clients,
				client: action.payload
			}
		case 'Clients - Error':
			return {
				...state,
				clients: [],
				error: action.payload
			}
		default:
			return state;
	}

}