import React from 'react'
import './AboutMe.css'
import { IconData } from '../Components/IconData';

function AboutMe() {

  return (
    <div className='flex-center  bg-2 abt '>
      <div className='abt-left  flex-right'>
        <div className=''>
          <h1 className='text-64 abt-h1 color-bright'>ABOUT ME</h1>
          <h2 className='abt-h2 color-bright'>
            I'm an Indie game developer, a Game Enthusiast, was borned in Palembang, Indonesia.
            Graduated from University Technology Sydney as Diploma of Information Technology.
          </h2>
        </div>
      </div>
      <div className='abt-right flex-center '>
        <div className=' flex-center'>
          <div>
            <h2 className='color-bright text-48 text-center'>SKILL</h2>
            <div className='abt-icons  flex-center'>
              {IconData.map((data) => {
                return <div className='abt-icon'>
                  <img className='abt-icon-main' src={'Images/Icons/' + data.icon} alt='framework icon' />
                </div>
              })}
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default AboutMe