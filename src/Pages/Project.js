import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import './Project.css'

function Project() {
  return (
    <div className='bg padding-top'>
      <h1 className='text-center text-64'>PROJECT</h1>
      <div className='project-cards'>
        <ProjectCard
          title='Initial Coin Offering Calculator'
          desc='Simple Calculator to get the value of token rate by inserting token decimal, desired token price, current Ether price.
          This is built to count ERC20 rate easier for multiple times'
          href='https://ico-calculator.steaksoft.net/'
          btn='Live Demo'
          img='Images/calculator.png'
          language={['Blazor','C#']}
        />
        <ProjectCard
          title='Ethereum Wallet Manager'
          desc='This project is intended to display ERC1155 and ERC721 Tokens that is not displayed on Metamask Extension. Not only that it can be used transfer assets'
          btn='Live Demo'
          href='https://ico-calculator.steaksoft.net/'
          img='Images/wallet.png'
          language={['Blazor','C#','Nethereum']}
          
        />
         <ProjectCard
          title='Blackground : Second Dimension'
          desc='This project is intended to display ERC1155 and ERC721 Tokens that is not displayed on Metamask Extension'
          btn='Download'
          href='https://play.google.com/store/apps/details?id=com.steaksoft.blackgroundsecdimbr'
          img='Images/bgsd.png'
          language={['Unity3d','C#','Photon PUN']}
        />
      </div>
    </div>
  )
}

export default Project