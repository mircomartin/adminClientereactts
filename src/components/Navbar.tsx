import { NavLink } from "react-router-dom";

export const Navbar = () => {

	const navLinkCssClasses = ( { isActive }: { isActive: boolean } ): string => {
    return `text-2xl block mt-2 hover:text-blue-300 uppercase ${ isActive ? "text-blue-300" : "text-white" }`;
  }

	return (
		<nav className="mt-10">
			<NavLink to="/" className={ navLinkCssClasses }>Home</NavLink>
			<NavLink to="clients/new-client" className={ navLinkCssClasses }>New Client</NavLink>
		</nav>
	)
}
