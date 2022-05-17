import React from 'react'
import './TextArea.css'

function TextArea(props) {
    return (
        <div className='text-area'>
            {props.text}
        </div>
    )
}

export default TextArea