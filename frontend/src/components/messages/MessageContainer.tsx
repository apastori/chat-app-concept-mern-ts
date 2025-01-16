import React, { useEffect } from 'react'
import { MultiMessages } from './MultiMessages'
import { MessageInput } from './MessageInput'
import { NoChatSelected } from './NoChatSelected'
import { useConversation } from '../../store/useConversation'
import { IUserConversationAPI } from '../../types/IUserConversationAPI'

export const MessageContainer = (): JSX.Element => {
	const { selectedConversation, setSelectedConversation}: 
	{
		selectedConversation: IUserConversationAPI | null,
		setSelectedConversation: (selectedConversation: IUserConversationAPI | null) => void 	
	} = useConversation()

	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null)
	}, [setSelectedConversation])
	
	return (
		<div className='md:min-w-[450px] flex flex-col'>
			{
				!selectedConversation ? (
					<NoChatSelected /> 
				) : (
					<React.Fragment>
						{/* Header */}
						<div className='bg-slate-500 px-4 py-2 mb-2'>
							<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>
								{`${selectedConversation.firstName} ${selectedConversation.lastName}`}
							</span>
						</div>
						<MultiMessages />
						<MessageInput />
					</React.Fragment>	
				)
			}	
		</div>
	)
}
