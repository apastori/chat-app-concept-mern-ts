import React from 'react'
import { MultiMessages } from './MultiMessages'

export const MessageContainer = () => {
	return (
		<div className='md:min-w-[450px] flex flex-col'>
			<React.Fragment>
				{/* Header */}
				<div className='bg-slate-500 px-4 py-2 mb-2'>
					<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>John doe</span>
				</div>

				<MultiMessages />
				{/*<MessageInput /> */}
			</React.Fragment>
		</div>
	)
}
