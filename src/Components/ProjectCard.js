import React from 'react'
import Button from './Button'
import './ProjectCard.css'
import TextArea from './TextArea'

function ProjectCard(props) {
  return (
    <div className='card'>
      <div className='card-img'>
        <img className='card-img-main' src={props.img} alt='Project Thumbnail' />
      </div>

      <div className='card-right '>

        <div className='card-text '>
          <h2 className='color-dark text-28 card-title'>{props.title}</h2>
          <p className='celadon card-text'>{props.desc}</p>
        </div>
        <div className='flex-left  card-lang'>
          {props.language.map((lang) =>
            <TextArea
              text={lang}
            />)}
        </div>
        <div className='card-button'>
          <Button
            href={props.href}
            text={props.btn}
          />
        </div>

      </div>
    </div>
  )
}

export default ProjectCard