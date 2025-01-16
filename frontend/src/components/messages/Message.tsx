import { useAuthContext } from '../../context/useAuthContext'
import { useConversation } from '../../store/useConversation'
import { IMessageProps } from '../../types/IMessageProps'
import { IUserConversationAPI } from '../../types/IUserConversationAPI'
import { IUserLocalStorage } from '../../types/IUserLocalStorage'
import { extractTime } from '../../utils/extractTime'

export const Message: React.FC<IMessageProps> = ({ message }: IMessageProps) => {
  const { authUser }: { authUser: IUserLocalStorage } = useAuthContext()
  const { selectedConversation }: { selectedConversation: IUserConversationAPI | null} = useConversation()
  const fromMe: boolean = message.senderId === authUser?._id
	const formattedTime: string = extractTime(message.createdAt)
	const chatClassName: string = fromMe ? "chat-end" : "chat-start"
	const profilePic: string = (fromMe ? authUser?.profilePic : selectedConversation?.profilePic) as string
	const bubbleBgColor: string = fromMe ? "bg-blue-500" : ""
	const shakeClass: string = message.shouldShake ? "shake" : ""
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={profilePic}
          />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
      <div className={'chat-footer opacity-50 text-xs flex gap-1 items-center'}>{formattedTime}</div>   
    </div>
  )
}
