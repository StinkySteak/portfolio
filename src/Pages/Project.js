import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import './Project.css'

function Project() {
  return (
    <div className='bg padding-top'>
      <h1 className='text-center text-64-pwa'>PROJECT</h1>
      <div className='project-cards'>


        <ProjectCard
          title='Stagdraft'
          desc='A 2D Multiplayer Pixelated top down PvP Team based War game. Ranging between 10-16 max Players. Players are able to Craft, Build, Loot & Fight NPC'
          img='Images/project_stagdraft.png'
          language={['Unity3d', 'C#', 'Photon Fusion', 'ASP. NET', 'React JS', 'AWS']}
          buttons={
            [
              { btnName: 'Website', href: 'https://stagdraft.steaksoft.net' },
              { btnName: 'Download', href: 'https://store.steampowered.com/app/2128540/Stagdraft/' },
            ]}
        />

        <ProjectCard
          title='Blackground : Second Dimension'
          desc='A simple PvP class-based game, built on top of Unity3d game engine, and Photon PUN for networking'
          img='Images/project_bgsd.png'
          language={['Unity3d', 'C#', 'Photon PUN']}
          buttons={
            [
              { btnName: 'Download', href: 'https://play.google.com/store/apps/details?id=com.steaksoft.blackgroundsecdimbr' },
            ]}
        />


<ProjectCard
          title='HexPlanet'
          desc='A Game built prior to Binus Game Jam 2022 in 2 days'
          img='Images/hex.png'
          language={['Unity3d','C#']}

          buttons={
            [
              { btnName: 'Live Demo', href: 'https://stinkysteak.itch.io/hexplanet' },
              { btnName: 'Source code', href: 'https://github.com/StinkySteak/HexPlanet' },
            ]}
        />
        <ProjectCard
          title='ISP I SPY'
          desc='Overwatch/TF2 reference based game, built for Global Game Jam 2022. Playable up to 6 Players'
          img='Images/isp.png'
          language={['Unity3d', 'C#', 'Photon Fusion']}
          buttons={
            [
              { btnName: 'Download', href: 'https://mysterioushatter.itch.io/isp-i-spy' },
              { btnName: 'Source code', href: 'https://github.com/StinkySteak/ProjectR' },
            ]}
        />

        <ProjectCard
          title='Ethereum Wallet Manager'
          desc='This project is intended to display ERC1155 and ERC721 Tokens that is not displayed on Metamask Extension. Not only that it can be used transfer assets'
          img='Images/project_wallet.png'
          language={['Blazor', 'C#', 'Nethereum']}
          buttons={
            [
              { btnName: 'Live Demo', href: 'https://wallet.steaksoft.net/' },
            ]}

        />

        <ProjectCard
          title='Initial Coin Offering Calculator'
          desc='Simple Calculator to get the value of token rate by inserting token decimal, desired token price, current Ether price.
          This is built to count ERC20 rate easier for multiple times'
          img='Images/project_calculator.png'
          language={['Blazor', 'C#']}

          buttons={
            [
              { btnName: 'Live Demo', href: 'https://ico-calculator.steaksoft.net/' },
            ]}
        />

       

      </div>
    </div>
  )
}

export default Project