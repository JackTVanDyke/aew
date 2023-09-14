import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../lib/contextLib'
import { useFormFields } from '../lib/hooksLib'
import { onError } from '../lib/errorLib'
import Loading from './Loading'
import { Auth } from 'aws-amplify'
export default function Signup() {
  const [fields, handleFieldChange] = useFormFields({
    email: '',
    password: '',
    confirmPassword: '',
    confirmationCode: '',
  })
  const nav = useNavigate()
  const [newUser, setNewUser] = useState(null)
  const { userHasAuthenticated } = useAppContext()
  const [isLoading, setIsLoading] = useState(false)

  function validateForm() {
    return (
      fields.email.length > 10 &&
      fields.password.length > 7 &&
      fields.password === fields.confirmPassword
    )
  }

  function validateConfirmationForm() {
    return fields.confirmationCode.length > 0
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setIsLoading(true)
    try {
      const newUser = await Auth.signUp({
        username: fields.email,
        password: fields.password,
      })
      setIsLoading(false)
      setNewUser(newUser)
    } catch (e) {
      onError(e)
      setIsLoading(false)
    }
  }

  async function handleConfirmationSubmit(event) {
    event.preventDefault()
    setIsLoading(true)
    try {
      await Auth.confirmSignUp(fields.email, fields.confirmationCode)
      await Auth.signIn(fields.email, fields.password)
      userHasAuthenticated(true)
      nav('/dashboard')
    } catch (e) {
      onError(e)
      setIsLoading(false)
    }
  }

  function renderConfirmForm() {
    return (
      <section className='mb-0'>
        <Loading isLoading={isLoading} />
        <form onSubmit={handleConfirmationSubmit}>
          <div className='mb-4'>
            <label htmlFor='email'>Confirmation Code</label>
            <p className='text-xs italic font-extralight'>
              Please check your email for confirmation code.
            </p>
            <input
              type='tel'
              id='confirmationCode'
              value={fields.confirmationCode}
              onChange={handleFieldChange}
              placeholder='firstname@gmail.com'
              required
            />
          </div>
          <div className='w-full mt-4 flex flex-col'>
            <button
              disabled={!validateConfirmationForm()}
              type='submit'
              className='cta-button text-primary border-secondary hover:text-white m-0 self-center'
            >
              Signup
            </button>
          </div>
        </form>
      </section>
    )
  }

  function renderForm() {
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
          <div className='my-4'>
            <label htmlFor='password'>Confirm your password</label>
            <input
              type='password'
              id='password'
              value={fields.confirmPassword}
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
              Signup
            </button>
          </div>
        </form>
      </section>
    )
  }

  return (
    <section className='flex flex-col items-center justify-center mb-0'>
      <div className='div-container'>{newUser === null ? renderForm() : renderConfirmForm()}</div>
    </section>
  )
}
