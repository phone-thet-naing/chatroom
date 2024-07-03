import { useEffect, useRef, useState } from "react";

import ChatFooter from "./ChatFooter";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import { Socket } from "socket.io-client";
import { useNavigate } from "react-router-dom";

export interface Message {
  text: string;
  name: string;
  id: string;
  socketId: string;
}

interface Props {
  socket: Socket;
}

const ChatPage = ({ socket }: Props) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const userName: any = localStorage.getItem("userName");
  const lastMessageRef = useRef<HTMLDivElement>(null);
  const [typingStatus, setTypingStatus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    socket.on("messageResponse", (data) => {
      setMessages([...messages, data]);
    });
  }, [socket, messages]);

  useEffect(() => {
    // scroll to bottom every time `messages` changes
    console.log("scroll effect works");
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    socket.on("typingResponse", (data) => {
      setTypingStatus(data);
    });
  }, [socket]);

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="flex">
      <ChatBar
        socket={socket}
        userName={userName}
        className="w-1/5 bg-transparent h-lvh p-2"
      />
      <div className="h-screen overflow-hidden w-4/5">
        <div className="flex h-fit justify-between p-3 align-middle bg-white">
          <div>
            <h3>Chat Room</h3>
          </div>
          <button
            className="bg-red-700 hover:bg-red-900 text-white font-semibold text-sm py-2 px-4 rounded-lg"
            onClick={handleLeaveChat}
          >
            Leave Chat
          </button>
        </div>
        <ChatBody
          lastMessageRef={lastMessageRef}
          socket={socket}
          messages={messages}
          className="w-full flex flex-col justify-end overflow-auto bg-slate-400"
        />

        {/* <p className="text-xs">{typingStatus}</p> */}
        <ChatFooter
          className="flex gap-2 w-full p-4 bg-yellow-100"
          socket={socket}
        />
      </div>
    </div>
  );
};

export default ChatPage;
