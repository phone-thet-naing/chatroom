import { GlobalProps } from "@/App";
import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { User } from "./Home";
import { IoSettingsOutline } from "react-icons/io5";

interface Props extends GlobalProps {
  userName: string;
  socket: Socket;
}

function ChatBar({ className, userName, socket }: Props) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    socket.on("newUserResponse", (data) => setUsers(data));
  }, [socket, users]);

  return (
    <div className={className}>
      <h2 className="font-semibold">{userName}</h2>

      {/* <span style={{ cursor: "pointer", backgroundColor: "blue" }}>
        <IoSettingsOutline />
      </span> */}

      <div className="text-sm">
        {users.map((user) => (
          <a href="/chat/1" key={user.socketId}>
            <p>{user.userName}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ChatBar;
