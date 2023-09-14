import React from 'react'
import social1 from '../assets/testimonial1.jpg'
import social2 from '../assets/testimonial2.jpg'
import social3 from '../assets/testimonial3.jpg'
import Rating from '@mui/material/Rating'
import { RiChatQuoteLine } from 'react-icons/ri'

export default function SocialProof() {
  return (
    <section>
      <div className='div-container bg-1'>
        <h2 className=''>What our customers are saying:</h2>
        <div className='col-container'>
          <img
            className='rounded-full shadow-lg w-32 h-32 mb-2 mx-auto'
            src={social1}
            alt='avatar'
            width={150}
            height={150}
          />
          <RiChatQuoteLine className='icon-blue w-8 h-8 self-start' />
          <p className='italic'>
            &quot;School got busy and I had to prioritize my time, but I didn&apos;t wanna give up
            seeing my friends. AceEssayWriter made sure I didn&apos;t have to do that, and I&apos;d
            definitely recommend them to anyone.&quot;
          </p>
          <Rating
            className='self-start pl-2'
            name='read-only'
            value={4.5}
            precision={0.5}
            readOnly
          />
          <p className='self-start'>- Darnell, college student</p>
        </div>
        <div className='col-container'>
          <img
            className='rounded-full shadow-lg w-32 h-32 mb-2 mx-auto'
            src={social2}
            alt='avatar'
            width={150}
            height={150}
          />
          <RiChatQuoteLine className='icon-blue w-8 h-8 self-start' />
          <p className='italic'>
            &quot;I was having a really hard time with all my school work, club meetings, band
            practice, and my part-time job. It was just too much, and I knew I needed some help.
            That&apos;s when a friend told me about AceEssayWriter. They helped me save time on my
            school work, so I could focus on all my other commitments. It was a total
            game-changer.&quot;
          </p>
          <Rating className='self-start pl-2' name='read-only' value={4} precision={0.5} readOnly />
          <p className='self-start'>- Joey, high school student</p>
        </div>
        <div className='col-container'>
          <img
            className='rounded-full shadow-lg w-32 h-32 mb-2 mx-auto'
            src={social3}
            alt='avatar'
            width={150}
            height={150}
          />
          <RiChatQuoteLine className='icon-blue w-8 h-8 self-start' />
          <p className='italic'>
            &quot;Not having to stress about my writing assignments as much has just been so
            awesome! It&apos;s helped me use my time better so much. I got into my dream college AND
            I even graduated top 25 in my class. I seriously can&apos;t recommend
            AceEssayWriter&apos;s monthly tutor service enough. It&apos;s seriously changed my
            life.&quot;
          </p>
          <Rating className='self-start pl-2' name='read-only' value={5} precision={0.5} readOnly />
          <p className='self-start'>- Sarah, college student</p>
        </div>
      </div>
    </section>
  )
}
