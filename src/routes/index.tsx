import { createBrowserRouter } from "react-router-dom";
import { Error } from "../components/Error";
import { Layout } from "../layouts/Layout";
import { EditClientPage } from "../pages/EditClientPage";
import { Home } from "../pages/Home";
import { NewClientPage } from "../pages/NewClientPage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
		path: '/',
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: 'clients/new-client',
				element: <NewClientPage />
			},
			{
				path: 'client/:id',
				element: <EditClientPage />
			}
		]
  }
]);