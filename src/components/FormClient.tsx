import { useContext, useEffect } from "react";
import { Client } from '../interfaces/interfaces';
import { ClientsContext } from '../context/ClientsContext';
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface NewClientState {
	registerForm: Client;
}

export const FormClient = () => {

	const { addNewClient, client } = useContext( ClientsContext )
	const { register, handleSubmit, formState: { errors }, reset } = useForm<NewClientState["registerForm"]>({ defaultValues: client });
	const navigate = useNavigate();

	useEffect(() => {
    reset(client);
  }, [client, reset]);

	const handleRegister: SubmitHandler<Client> = (data) => {

		if (client.email) {
			console.log('existe')
		}else{
			addNewClient( {...data, id: (Math.random()+1)} );
		}
		navigate('/', { replace: true });
	}

	return (
		<>
			<form onSubmit={ handleSubmit(handleRegister) } noValidate>
				<div className="mb-4">
					<label
						className="text-gray-800"
						htmlFor="nombre"
					>First Name and Last Name:</label>
					<input 
						{ ...register("nombre", 
							{ 
								required: 'Name is required',
								minLength: {
									value: 2,
									message: 'The field at least must have 2 characters.'
								} 
							}
						)}
						type="text"
						className="mt-2 block w-full p-3 bg-gray-50"
						placeholder="Nombre del Cliente"
						
					/>
					<p className="text-red-400 font-bold text-l uppercase mt-2">{ errors.nombre?.message }</p>
				</div>
				<div className="mb-4">
					<label
						className="text-gray-800"
						htmlFor="empresa"
					>Company:</label>
					<input 
						{...register("empresa", { 
							required: 'Compnay is required',
							minLength: {
								value: 2,
								message: 'The field at least must have 2 characters.'
							} 
						}
						)}
						type="text"
						className="mt-2 block w-full p-3 bg-gray-50"
						placeholder="Empresa del Cliente"
						
					/>
					<p className="text-red-400 font-bold text-l uppercase mt-2">{ errors.empresa?.message }</p>
				</div>

				<div className="mb-4">
					<label
						className="text-gray-800"
						htmlFor="email"
					>E-mail:</label>
					<input 
						{...register("email", { 
							required: 'Email is required',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: "Invalid email address"
							}
						})}
						className="mt-2 block w-full p-3 bg-gray-50"
						placeholder="Email del Cliente"
						
					/>
					<p className="text-red-400 font-bold text-l uppercase mt-2">{ errors.email?.message }</p>
				</div>

				<div className="mb-4">
					<label
						className="text-gray-800"
						htmlFor="telefono"
					>Teléfono:</label>
					<input 
						{ ...register("telefono", { 
							required: 'Phone is required',
							pattern: {
								value: /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
								message: "Invalid phone"
							}
						})}
						className="mt-2 block w-full p-3 bg-gray-50"
						placeholder="Teléfono del Cliente"
						
					/>
					<p className="text-red-400 font-bold text-l uppercase mt-2">{ errors.telefono?.message }</p>
				</div>

				<button type="submit" className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg">Register</button>
			</form>
		</>
  )
}
