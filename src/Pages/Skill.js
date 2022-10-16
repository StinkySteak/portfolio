import React from 'react'
import { IconData } from '../Components/IconData';
import './Skill.css'

function Skill() {
    return (
        <div className='skill'>
            <h1 className='text-center color-bright'>SKILL</h1>

            <div className='abt-icons  flex-center'>
                {IconData.map((data) => {
                    return <div className='abt-icon'>
                        <img className='abt-icon-main' src={'Images/Icons/' + data.icon} alt='framework icon' />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Skill