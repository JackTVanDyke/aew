import React from 'react'
import Benefits from '../components/Benefits'
import CTA1 from '../components/CTA1'
import CTA2 from '../components/CTA2'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'
import SocialProof from '../components/SocialProof'

export default function Landing() {
  return (
    <div className='w-full h-full'>
      <Hero />
      {/* Social proof section */}
      <SocialProof />
      {/* Benefits section */}
      <Benefits />
      {/* CTA1 */}
      <CTA1 />
      {/* Detailed product section */}
      <HowItWorks />
      {/* Pricing section */}
      <Pricing />
      {/* CTA2 */}
      <CTA2 />
    </div>
  )
}
