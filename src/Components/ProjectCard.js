import React from 'react'
import Button from './Button'
import './ProjectCard.css'
import TextArea from './TextArea'

function ProjectCard(props) {
  return (
    <div className='card'>
      <div className='card-img-container'>
        <img className='card-img' src={props.img}></img>
      </div>
      <div className='card-content-container '>
        <div className='card-content-top-container'>
        <p className='card-text-title'>
            {props.title}
          </p>
          <p className='card-text-p'>
            {props.desc}
          </p>
        </div>

        <div className='card-content-bottom-container '>
          <div className='card-button-container'>
            {props.buttons.map((b) =>
              <Button
              text={b.btnName}
              href={b.href}
            />
            )}
          </div>
          <div className='card-textarea-container'>
          {props.language.map((lang) =>
              <TextArea
                text={lang}
              />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard