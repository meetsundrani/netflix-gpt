import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8e8ff9d3-17b4-4ce1-b571-06ba4e025cca/web_collection/IN-en-20241125-TRIFECTA-649c9db8-a195-4f78-a2e6-f4a02bda21f6_large.jpg" alt="logo" />
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 align-middle'>
      <h1 className='font-bold text-white mb-[28px]'>Sign In</h1>
      <input type='text' placeholder='Email or mobile number' className='p-2 m-2 bg-black border-1 border-white' />
      <input type='password' placeholder='Password' className='p-2 m-2  bg-black text-gray-600 border-1 border-white' />
      <button className='p-4 m-4'>Sign In</button>
    </form>
    </div>
  )
}

export default Login