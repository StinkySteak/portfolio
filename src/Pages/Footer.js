import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer bg-2'>
      <div className='flex-center a-list'>
        <a className='a white' href='mailto:stinkysteak@gmail.com'>Email Me</a>
        <a className='a white' target={'_blank'} rel='noreferrer' href='https://linkedin.com/in/timothy-edrick'>LinkedIn</a>
        <a className='a white' target={'_blank'} rel='noreferrer' href='https://github.com/stinkysteak'>Github</a>
      </div>
      <div className='footer-copyright'>
        <p className='white text-center'>Made by Timothy Edrick © 2022</p>
      </div>
    </div>
  )
}

export default Footer