import { useState } from 'react'
import toast from 'react-hot-toast'
import { IoSearchSharp } from 'react-icons/io5'
import { useConversation } from '../../store/useConversation'
import { IUserConversationAPI } from '../../types/IUserConversationAPI'
import { useGetConversations } from '../../hooks/useGetConversation'

export const SearchInput = () => {
	const [search, setSearch]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>("")
	const { setSelectedConversation }: { setSelectedConversation: (conversation: IUserConversationAPI | null) => void }  = useConversation()
	const { conversations }: { conversations: IUserConversationAPI[] } = useGetConversations()

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault()
		if (!search) return
		if (search.length < 3) {
			toast.error("Search term must be at least 3 characters long")
			return
		}
		const conversation: IUserConversationAPI | undefined = conversations.find((conversation: IUserConversationAPI): boolean => {
			return `${conversation.firstName} ${conversation.lastName}`.toLowerCase().includes(search.toLowerCase())
		})
		if (conversation) {
			setSelectedConversation(conversation)
			setSearch("")
			return
		}
		toast.error("No such user found!")
	}

	return (
		<form 
		className='flex items-center gap-2'
		onSubmit={handleSubmit}
		>
			<input 
			type='text' 
			placeholder='Search…' 
			className='input input-bordered rounded-full'
			value={search}
			onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
			/>
			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
			</button>
		</form>
	)
}