import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
	return (
		<div className="md:min-h-screen">
			<div className="flex">
				<aside className="md:w-3/12 bg-blue-900 px-5 py-10">
					<h2 className="text-4xl font-black text-center text-white">CRM - Clientes</h2>
					<Navbar />
				</aside>
				<main className="md:w-9/12 p-10 md:h-screen overflow-scroll">
					<Outlet/>
				</main>
			</div>
		</div>
	)
}
