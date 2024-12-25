import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>Login<span className='text-blue-500'>Chat-App-Concept</span></h1>
            <form>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input
                        type='text'
                        placeholder='Enter username'
                        className='w-full input input-bordered h-10'
                        onChange={(e) => console.log(e.target.value)}
                    />
                </div>

                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input
                        type='password'
                        placeholder='Enter Password'
                        className='w-full input input-bordered h-10'
                        onChange={(e) => console.log(e.target.value)}
                    />
				</div>
            </form>
        </div>    
    </div>
  )
}

export default Login