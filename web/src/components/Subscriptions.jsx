import React from 'react'
import { GiFountainPen, GiGraduateCap, GiExtraTime } from 'react-icons/gi'
import { FaUserClock } from 'react-icons/fa'

export default function Subscriptions() {
  return (
    <section>
      <div className='div-container cta-bg'>
        <div className='col-container mt-8'>
          <h1 className='text-black'>Ready To Get Started?</h1>
          <h3 className='text-primary font-bold'>
            Join thousands of people acing their essays every month
          </h3>
        </div>
        <div className='row-container text-center my-8'>
          <div className='col-container'>
            <GiFountainPen className='sub-icon' />
            <h2 className='mx-auto text-lg'>End Writer&apos;s Block</h2>
          </div>
          <div className='col-container'>
            <GiGraduateCap className='sub-icon' />
            <h2 className='mx-auto text-lg'>Boost Your Grades</h2>
          </div>
          <div className='col-container'>
            <FaUserClock className='sub-icon' />
            <h2 className='mx-auto text-lg'>Save Time Writing</h2>
          </div>
        </div>
        <div className='sm:row-container col-container sm:max-w-[95%] justify-evenly'>
          <div className='card min-h-[500px] rounded-lg min-w-[250px] text-left'>
            <h3 className=''>Basic plan</h3>
            <div className='flex items-baseline'>
              <span className='text-3xl font-semibold'>$</span>
              <span className='text-5xl font-extrabold tracking-tight'>19.99</span>
              <span className='ml-1 text-xl font-normal'>/month</span>
            </div>
            <ul role='list' className='space-y-5 my-7'>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500'>
                  4 pages a month
                </span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                  3 day delivery
                </span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                  Standard Quality Assurance
                </span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                  Standard Writing Process
                </span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                  Discounted 1 Day Delivery
                </span>
              </li>
            </ul>
            <button className='sub-button'>Choose plan</button>
          </div>
          <div className='card rounded-lg min-h-[500px] min-w-[250px] text-left relative '>
            <span className='bg-white border border-primary text-xs font-medium text-primary text-center px-1.5 py-0.5 absolute -translate-y-1.5 translate-x-1.5  top-0 right-0'>
              Most Popular
            </span>
            <h3 className=''>Standard plan</h3>
            <div className='flex items-baseline'>
              <span className='text-3xl font-semibold'>$</span>
              <span className='text-5xl font-extrabold tracking-tight'>29.99</span>
              <span className='ml-1 text-xl font-normal'>/month</span>
            </div>
            <ul role='list' className='space-y-5 my-7'>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500'>
                  10 pages a month
                </span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                  3 day delivery
                </span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                  Enhanced Quality Assurance
                </span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                  Standard Writing Process
                </span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                  Heavily Discounted 1 Day Delivery
                </span>
              </li>
            </ul>
            <button className='sub-button'>Choose plan</button>
          </div>
          <div className='card min-h-[500px] rounded-lg min-w-[250px] text-left relative'>
            <span className='bg-white border border-primary text-xs font-medium text-primary text-center px-1.5 py-0.5 absolute -translate-y-1.5 translate-x-1.5  top-0 right-0'>
              Best Value
            </span>
            <h3 className=''>Valedictorian plan</h3>
            <div className='flex items-baseline'>
              <span className='text-3xl font-semibold'>$</span>
              <span className='text-5xl font-extrabold tracking-tight'>49.99</span>
              <span className='ml-1 text-xl font-normal'>/month</span>
            </div>
            <ul role='list' className='space-y-5 my-7'>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500'>
                  20 pages a month
                </span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                  1 day delivery
                </span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                  Top-Tier Quality Assurance
                </span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                  Enhanced Writing Process
                </span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                  Discounted Express Delivery
                </span>
              </li>
            </ul>
            <button className='sub-button'>Choose plan</button>
          </div>
        </div>
      </div>
    </section>
  )
}
