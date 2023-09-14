import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className='div-container'>
        <div className='w-full flex flex-row justify-between items-center'>
          <div className='md:w-1/4 w-full'>
            <h1 className='text-xl'>
              AceEssayWriter <br />
              <span className='italic text-lg'>#1 Essay Writer</span>
            </h1>
          </div>
          <div className='w-3/5 flex justify-end'>
            <ul className='w-full flex-row justify-between items-center mx-4 hidden md:flex'>
              <li>Pricing</li>
              <li>Purchase</li>
              <li>Membership</li>
              <li>Account</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
