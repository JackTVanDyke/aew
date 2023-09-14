import React, { useState } from 'react'
import { Auth } from 'aws-amplify'
import { useAppContext } from '../lib/contextLib'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'
import { onError } from '../lib/errorLib'
import { useFormFields } from '../lib/hooksLib'

export default function LoginForm() {
  const { userHasAuthenticated } = useAppContext()
  const nav = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [fields, handleFieldChange] = useFormFields({
    email: '',
    password: '',
  })

  function validateForm() {
    return fields.email.length > 10 && fields.password.length > 7
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setIsLoading(true)
    try {
      await Auth.signIn(fields.email, fields.password)
      userHasAuthenticated(true)
      nav('/dashboard')
    } catch (e) {
      onError(e)
      setIsLoading(false)
    }
  }

  return (
    <section className='mb-0'>
      <Loading isLoading={isLoading} />
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='email'>Your email</label>
          <input
            type='email'
            id='email'
            value={fields.email}
            onChange={handleFieldChange}
            placeholder='firstname@gmail.com'
            required
          />
        </div>
        <div className='my-4'>
          <label htmlFor='password'>Your password</label>
          <input
            type='password'
            id='password'
            value={fields.password}
            onChange={handleFieldChange}
            required
          />
        </div>
        <div className='w-full mt-4 flex flex-col'>
          <button
            disabled={!validateForm()}
            type='submit'
            className='cta-button text-primary border-secondary hover:text-white m-0 self-center'
          >
            Login
          </button>
        </div>
      </form>
    </section>
  )
}
