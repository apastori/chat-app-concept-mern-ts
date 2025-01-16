import { TiMessages } from "react-icons/ti"
import { useAuthContext } from "../../context/useAuthContext"
import { IUserLocalStorage } from "../../types/IUserLocalStorage"

export const NoChatSelected = (): JSX.Element => {
	const { authUser }: {authUser: IUserLocalStorage} = useAuthContext()
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser ? `${authUser.firstName} ${authUser.lastName}` : 'John Doe'} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	)
}