import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import Signup from '../components/Signup'

export default function Account() {
  const [page, setPage] = useState(true)
  function handlePage() {
    setPage(!page)
  }
  return (
    <section className='h-[calc(100vh-296px)] w-full flex flex-col items-center justify-center'>
      <div className='div-container'>
        {page ? <LoginForm /> : <Signup />}
        {page ? (
          <p className='italic font-light'>
            Need an account?{' '}
            <a onClick={handlePage} className='text-tertiary cursor-pointer font-normal not-italic'>
              Signup.
            </a>
          </p>
        ) : (
          <p className='italic font-light'>
            Have an account?{' '}
            <a onClick={handlePage} className='text-tertiary cursor-pointer font-normal not-italic'>
              Login.
            </a>
          </p>
        )}
      </div>
    </section>
  )
}
