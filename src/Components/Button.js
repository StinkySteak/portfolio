import React from 'react'
import './Button.css'

function Button(props) {
    return (
        <div>
            <button className='btn'>
                <a target={'_blank'} rel='noreferrer' href={props.href}>
                    <strong>{props.text}</strong>
                </a>
            </button>
        </div>
    )
}

export default Button