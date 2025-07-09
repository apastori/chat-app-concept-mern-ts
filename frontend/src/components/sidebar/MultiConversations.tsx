import { useGetConversations } from "../../hooks/useGetConversation"
import { getRandomEmoji } from "../../utils/emojiUtils"
import { Conversation } from "./Conversation"
import { IUserConversationAPI } from "../../types/IUserConversationAPI"

export const MultiConversations = (): JSX.Element => {
	const { loading, conversations }: {
		loading: boolean,
		conversations: IUserConversationAPI[]
	} = useGetConversations()

	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{conversations.map((conversation: IUserConversationAPI, idx: number) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length - 1}
				/>
			))}

			{loading ? <span className='loading loading-spinner mx-auto'></span> : null}
		</div>
	)
}