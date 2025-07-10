import { useEffect } from "react";
import { useSocketContext } from "../context/useSocketContext";
import { useConversation } from "../store/useConversation";
import { ISocket } from "../types/ISocket";
import { IUserMessageAPI } from "../types/IUserMessageAPI";
import notificationSound from "../assets/sounds/notification.mp3"

const useListenMessages = () => {
	const { socket }: { socket: ISocket } = useSocketContext();
	const { messages, setMessages }: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        messages: any[]
        setMessages: (messages: IUserMessageAPI[]) => void
    } = useConversation();

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			newMessage.shouldShake = true;
			const sound = new Audio(notificationSound);
			sound.play();
			setMessages([...messages, newMessage]);
		});

		return () => {
            socket?.off("newMessage");
        }
	}, [socket, setMessages, messages]);
}

export default useListenMessages