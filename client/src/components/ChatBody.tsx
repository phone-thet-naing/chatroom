import { GlobalProps } from "@/App"
import ChatBubble from "./ChatBubble"
import { Message } from "./ChatRoom"
import { Socket } from "socket.io-client"
import { LegacyRef } from "react"

interface Props extends GlobalProps {
    messages: Message[]
    socket: Socket
    lastMessageRef: LegacyRef<HTMLDivElement>
}

const ChatBody = ({ className, messages, lastMessageRef }: Props) => {

    return (   
        <div className={className} style={{height: "80%"}}>
            {/* Message Received */}
            <div className="overflow-aut">
                {messages.map((message, index) => {
                    const isCurrentUser: boolean = message.name === localStorage.getItem('userName');
                    return (
                        <div key={index} className={isCurrentUser ? "flex px-4 justify-end" : "flex-col px-4"}>
                            <ChatBubble message={message} justify={isCurrentUser ? 'justify-end' : 'justify-start'} />                     
                        </div>
                        
                    )
                })}
            </div>

            <div ref={lastMessageRef} />
        </div>    
    )
} 

export default ChatBody