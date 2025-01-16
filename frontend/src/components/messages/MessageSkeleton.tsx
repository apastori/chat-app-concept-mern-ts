import React from "react"

const MessageSkeleton = (): JSX.Element => {
	return (
		<React.Fragment>
			<div className='flex gap-3 items-center'>
				<div className='skeleton w-10 h-10 rounded-full shrink-0 bg-black'></div>
				<div className='flex flex-col gap-1'>
					<div className='skeleton h-4 w-40 bg-black'></div>
					<div className='skeleton h-4 w-40 bg-black'></div>
				</div>
			</div>
			<div className='flex gap-3 items-center justify-end'>
				<div className='flex flex-col gap-1'>
					<div className='skeleton h-4 w-40 bg-black'></div>
				</div>
				<div className='skeleton w-10 h-10 rounded-full shrink-0 bg-black'></div>
			</div>
		</React.Fragment>
	)
}

export { MessageSkeleton }