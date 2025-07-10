import { BiLogOut } from "react-icons/bi"
import { useLogout } from "../../hooks/useLogout"

export const LogoutButton = (): JSX.Element => {
	const {loading, logout}: {
        loading: boolean,
        logout: () => Promise<void>
    } = useLogout()
	return (
		<div className='mt-auto'>
			{!loading ? (
				<BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	)
}