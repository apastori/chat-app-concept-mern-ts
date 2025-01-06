import React, { useEffect } from 'react'
import { MultiMessages } from './MultiMessages'
import { MessageInput } from './MessageInput'
import { NoChatSelected } from './NoChatSelected'
import { useConversation } from '../../store/useConversation'
import { genderDefaultName } from '../../utils/genderDefaultName'
import { Gender } from '../../types/Gender'

export const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation} = useConversation()
	const noChatSelected: boolean = true

	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation])
	
	return (
		<div className='md:min-w-[450px] flex flex-col'>
			{
				noChatSelected ? (
					<NoChatSelected /> 
				) : (
					<React.Fragment>
						{/* Header */}
						<div className='bg-slate-500 px-4 py-2 mb-2'>
							<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>
								{selectedConversation ? 
									`${selectedConversation.firstName} ${selectedConversation.lastName}` : 
									genderDefaultName(selectedConversation?.gender)
								}
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
