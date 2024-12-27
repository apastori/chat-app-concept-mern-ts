import { Conversation } from "./Conversation";

export const MultiConversations = () => {
	return (
		<div className='py-2 flex flex-col overflow-auto'>
			<Conversation />
			<Conversation />
			<Conversation />
			<Conversation />
		    <Conversation />
			<Conversation />
		</div>
	)
}