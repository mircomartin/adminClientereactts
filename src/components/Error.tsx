interface ErrorProps {
	error: string;
}

export const Error = ( { error }: ErrorProps ) => {
	return (
		<div className="space-y-8">
			<h1 className="text-center text-6xl font-extrabold mt-20 text-blue-900">
				CRM - Clientes
			</h1>
			<p className="text-center">There is an ERROR</p>
			<p className="text-center">{error}</p>
		</div>
	)
}
