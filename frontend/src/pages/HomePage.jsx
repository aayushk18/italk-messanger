import React from 'react'
import { useChatStore } from '../lib/useChatStore'
import NochatSelected from '../components/NochatSelected';


const HomePage = () => {

    const {selectedUser } = useChatStore();




    return (
        <div className='text-amber-200'>HomePage
<div>

    {!selectedUser ? <NochatSelected/>:<NochatSelected/>}
</div>
        </div>
    )
}

export default HomePage