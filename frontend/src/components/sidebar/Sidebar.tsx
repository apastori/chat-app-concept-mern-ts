import React from 'react'
import { SearchInput } from './SearchInput'
import { MultiConversations } from './MultiConversations'
import { LogoutButton } from './LogoutButton'

export const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SearchInput />
        <div className='divider px-3'></div>
        <MultiConversations />
        <LogoutButton />
    </div>
  )
}
