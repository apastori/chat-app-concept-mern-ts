import { useGetMessages } from "../../hooks/useGetMessages"
import { IUserMessageAPI } from "../../types/IUserMessageAPI"
import { MessageSkeleton } from "./MessageSkeleton"
import { Message } from "./Message"

export const MultiMessages = (): JSX.Element => {
    const { loading, messages }: {
        loading: boolean,
        messages: IUserMessageAPI[]
    } = useGetMessages()

    return (
        <div className="px-4 flex-1 overflow-auto">
            {!loading &&
				messages.length > 0 &&
				messages.map((message: IUserMessageAPI) => (
					<div key={message._id}>
						<Message message={message} />
					</div>
				))
            }

			{loading && [...Array(3)].map((_, idx: number) => <MessageSkeleton key={idx} />)}

			{!loading && 
                messages.length === 0 && 
                (
                    <p className='text-center text-white'>Send a message to start the conversation</p>
                )
            }
        </div>
    )
}