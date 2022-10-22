import React from 'react'
import './Accomplishment.css'
import Badge from './Badge'

function Accomplishment() {
    return (
        <div className='bg-1 accomplishment '>
            <div>
                <h1 style={{ marginTop: '50px' }} className='text-64-pwa text-center'>ACCOMPLISHMENT</h1>
                <div className='flex-vertical '>

                    <div className='featured' style={{ marginTop: '50px' }}>
                        <h1 style={{ marginTop: '50px' }} className='text-center text-48-pwa'>HIGHLIGHTED</h1>

                        <div className='badges-flex '>
                            <Badge
                                title="Microsoft Certified: Azure Fundamentals"
                                link="https://www.credly.com/badges/2127a936-d9d0-4ebf-ba9a-d30223c20aa6/public_url"
                                img="Images/az.png"
                            />
                            <Badge
                                title="AWS Certified Cloud Practitioner"
                                link="https://www.credly.com/badges/9860c2cd-ecf5-48a2-b6cc-ccb307e64800/public_url"
                                img="Images/aws_ccp.png"
                            />
                        </div>
                    </div>
                    <div style={{ marginTop: '50px' }}></div>
                    <h1 style={{ marginTop: '50px' }} className='text-center text-48'>ORDINARY</h1>

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