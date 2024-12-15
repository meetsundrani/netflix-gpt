import { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8e8ff9d3-17b4-4ce1-b571-06ba4e025cca/web_collection/IN-en-20241125-TRIFECTA-649c9db8-a195-4f78-a2e6-f4a02bda21f6_large.jpg" alt="logo" />
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 align-middle text-white bg-opacity-80'>
      <h1 className='font-bold py-4 text-3xl'> {isSignInForm ? 'Sign In' : 'Sign Up'} </h1>
      {!isSignInForm && (<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-md' />)}
      <input type='text' placeholder='Email or mobile number' className='p-4 my-4 w-full bg-gray-700 rounded-md' />
      <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-md' />
      <button className='p-4 my-6 bg-red-700 w-full rounded-md'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
      <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netfllix? Sign Up Now' : 'Already a user? Sign In Now'}</p>
    </form>
    </div>
  )
}

export default Login