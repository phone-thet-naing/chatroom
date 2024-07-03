import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Socket } from "socket.io-client"

interface Props {
    socket: Socket
}

export interface User {
    userName: string 
    socketId: string 
}

const Home = ({ socket }: Props) => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState<string>("")

    const handleSignIn = () => {
        localStorage.setItem("userName", userName)
        socket.emit("newUser", { userName, socketId: socket.id })
        navigate('/chat')
    }

    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-2/5 mx-auto my-5 flex flex-col gap-3" onSubmit={handleSignIn}>
            <h1 className="font-bold text-3xl text-center mb-2">Sign in to Open Chat</h1>

            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>

            <input type="text" name="username" id="username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={userName} onChange={(e) => setUserName(e.target.value)} />

            <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Sign In
            </button>
        </form>
    )
}

export default Home