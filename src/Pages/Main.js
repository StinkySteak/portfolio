import React from 'react'
import './Main.css'

function Main() {
    return (
        <div className='main bg  flex-center'>
            <div className='width-50  main-left '>
                <div className='main-left-text flex-right'>
                    <div>
                        <h1 className='text-64 main-header'>Timothy Edrick</h1>
                        <h1 className='main-text'>
                            I am an indie game developer interested on games, computers, and Internet
                        </h1>
                    </div>
                </div>
            </div>
            <div className='width-50 '>
                <img className='main-img' src='Images/tim.webp' width={'60%'} alt='timothy edrick' />
            </div>
        </div>
    )
}

export default Main