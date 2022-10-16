import React from 'react'
import { ExternalLink } from 'react-external-link'
import './Badge.css'

function Badge(props) {

    let isEmpty = props.empty;

    return (
        <>
            <div className={`badge  ${isEmpty ? "empty" : ""}`}>
                <div className='badge-img-container  flex-center'>
                    {props.img && <img className='badge-img' src={props.img} alt='certificate' />}
                </div>
                <div className='badge-text-container'>
                    <h1 className='text-center' style={{ fontSize: '22px' }}>{props.title}</h1>
                    {props.desc && <p className='text-center'>{props.desc}</p>}
                    <div className='flex-center'>
                        {props.link && <ExternalLink href={props.link}>Link</ExternalLink>}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Badge