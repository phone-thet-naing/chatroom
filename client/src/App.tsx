import "./App.css";
import { 
	createBrowserRouter, 
	RouterProvider 
} from 'react-router-dom'
import ErrorPage from "./components/ErrorPage"
import Home from "./components/Home";
import ChatPage from "./components/ChatRoom";

import { io, Socket } from "socket.io-client";
import TheSearch from "./components/TheSearch";


const url = "http://localhost:3000";
const socket: Socket = io(url);

socket.on("connect", () => {
  console.log(`User with id ${socket.id} has connected!`);
});

socket.on("disconnect", () => {
  console.log(`User with id ${socket.id} has disconnected!`);
});

export interface GlobalProps {
  className?: string
}

const router = createBrowserRouter([
	{
	  path: '/',
	  element: <Home socket={socket} />,
	  errorElement: <ErrorPage />
	},
	{
		path: "/chat",
		element: <ChatPage socket={socket} />,
		errorElement: <ErrorPage />
	}
])

function App() {

	// return (
	// 	<TheSearch />
	// )

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
