import React from 'react'
import { AiOutlineClockCircle, AiOutlineSolution } from 'react-icons/ai'
import { BiBrain } from 'react-icons/bi'
export default function Benefits() {
  return (
    <section>
      <div className='div-container bg-2'>
        <h2 className=''>Why choose AceEssayWriter?</h2>
        <div className='col-container'>
          <AiOutlineClockCircle className='react-icon icon-blue' />
          <h3 className=''>Fast turnaround times</h3>
          <p className=''>
            We offer 4 hour, 1 day, and 3 day service times to fit your deadline needs.
          </p>
        </div>
        <div className='col-container'>
          <BiBrain className='react-icon icon-blue' />
          <h3 className=''>Expert writers</h3>
          <p className=''>
            Our team of writers specializes in helping students like you with their writing
            assignments.
          </p>
        </div>
        <div className='col-container'>
          <AiOutlineSolution className='react-icon icon-blue' />
          <h3 className=''>Quality assurance</h3>
          <p className=''>
            Each paper is checked for plagiarism, grammar, spelling, and more before being delivered
            - and if you&apos;re not happy, we&apos;ll rewrite it.
          </p>
        </div>
      </div>
    </section>
  )
}
