import React from 'react'
import { ExternalLink } from 'react-external-link'
import './Badge.css'

function Badge(props) {
    return (
        <div className='badge'>
            <div className='badge-img-container'>
               {props.img &&  <img className='badge-img' src={props.img} alt='certificate' />}
            </div>
            <div className='badge-text-container'>
                <h1 className='text-center' style={{ fontSize: '22px' }}>{props.title}</h1>
               {props.desc && <p className='text-center'>{props.desc}</p>} 
                <div className='flex-center'>
                   {props.link && <ExternalLink href={props.link}>Link</ExternalLink>}
                </div>
            </div>
        </div>
    )
}

export default Badge