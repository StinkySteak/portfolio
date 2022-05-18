import React from 'react'
import './Button.css'
import { ExternalLink } from 'react-external-link';

function Button(props) {
    return (
        <div>
            <ExternalLink href={props.href}>
                <button className='btn'>
                    <strong>{props.text}</strong>
                </button>
            </ExternalLink>
        </div>
    )
}

export default Button