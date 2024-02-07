'use client'

import Image from 'next/image'

import {TypeAnimation} from 'react-type-animation'

export default function Home() {
  return (
    <div className='w-full h-screen bg-slate-100 flex justify-center items-center'>
      <main className='text-center'>
        
        <div className='inline-flex items-center justify-center'>
          <TypeAnimation
            sequence={[
              'Hello I am Andrew Aliaj', // Types 'One'
              1000, // Waits 1s
              'I am a Software Engineer and a Full Stack Web Developer', // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              'I provide consulting and freelance services to clients', 
              3000,
              'Feel free to contact me to discuss',// Types 'Three' without deleting 'Two'
              () => {
                console.log('Sequence completed');
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '5em', display: 'inline-block' }} // Adjusted font size for better visibility
          />
        </div>
      </main>
    </div>
  )
}


