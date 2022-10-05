import React from 'react'
import './Accomplishment.css'
import Badge from './Badge'

function Accomplishment() {
    return (
        <div className='bg-1 accomplishment'>
            <div>
                <h1 className='text-64-pwa text-center'>ACCOMPLISHMENT</h1>
                <div className='flex-center'>
                    <div className='badges'>
                        <Badge
                            title="Sololearn C# Certificate"
                            link="https://www.sololearn.com/certificates/CT-KHLUEGYH"
                            img="Images/csharp.png"
                        />
                         <Badge
                            title="AWS Cloud Practitioner Essentials Completion"
                            link="Documents/aws_ccp_e.pdf"
                            img="Images/aws_ccp_e.jpg"
                        />
                        <Badge
                            title="IELTS 6.0"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accomplishment