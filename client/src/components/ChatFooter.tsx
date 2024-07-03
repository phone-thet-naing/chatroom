import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { GlobalProps } from "@/App";
import { FormEvent, useState } from "react";
import { Socket } from "socket.io-client";

interface Props extends GlobalProps {
  socket?: Socket;
}

const ChatFooter = ({ className, socket }: Props) => {
  const [message, setMessage] = useState<string>("");

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem("userName")) {
      socket?.emit("message", {
        text: message,
        name: localStorage.getItem("userName"),
        id: `${socket.id}${Math.random()}`,
        socketId: socket.id,
      });
    }
    console.log({ userName: localStorage.getItem("userName"), message });
    setMessage("");
  };

  const handleTyping = () => {
    socket?.emit("typing", `${localStorage.getItem("userName")} is typing...`);
  };

  return (
    <div>
      <form onSubmit={handleSendMessage} className={className}>
        <Input
          placeholder="Write a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleTyping}
        />
        <Button className="bg-blue-500 hover:bg-blue-700 rounded-lg text-sm font-semibold">
          Send
        </Button>
      </form>
    </div>
  );
};

export default ChatFooter;
