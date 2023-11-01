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
          desc="A 2D Multiplayer Pixelated top down PvP Team based War game. Ranging between 10-16 max Players. Players are able to Craft, Build, Loot & Fight NPC. 
          In this project I'm the only game developer (solo) and contribute on building game frameworks, implementing multiplayer features, drawing game art, game design, even doing server architecture (devOps & BackEnd)"
          img='Images/project_stagdraft.png'
          language={['Unity3d', 'C#', 'Photon Fusion', 'ASP. NET', 'React ', 'Docker','AWS']}
          buttons={
            [
              { btnName: 'Website', href: 'https://stagdraft.steaksoft.net' },
              { btnName: 'Download', href: 'https://store.steampowered.com/app/2128540/Stagdraft/' },
            ]}
        />

  <ProjectCard
          title='Mythical Adventure'
          desc="A simple and rewarding Idle mobile game set on Fantasy adventure that can be played anytime. This project is built prior to IGGI Gameseed 2023 & has been running for 6 months. I'm the lead programmer on this project, my tasks was managing timeline, creation custom ECS Framework, optimization, and game design decisions"
          img='Images/project_ma.png'
          language={['Unity3d', 'C#', 'Firebase','Project Management','Custom ECS']}
          buttons={
            [
              { btnName: 'Download', href: 'https://play.google.com/store/apps/details?id=com.retiredgamer.mythicaladventure' },
            ]}
        />

        <ProjectCard
          title='Blackground : Second Dimension'
          desc='A simple PvP class-based game, built on top of Unity3d game engine, and Photon PUN for networking. Another solo development project I developed, the first project I made it comercially and multiplayer'
          img='Images/project_bgsd.png'
          language={['Unity3d', 'C#', 'Photon PUN']}
          buttons={
            [
              { btnName: 'Download', href: 'https://play.google.com/store/apps/details?id=com.steaksoft.blackgroundsecdimbr' },
            ]}
        />

<ProjectCard
          title='Project_P'
          desc="A simple PvP dogfighter game made for Game Jam Plus 2023 in only 2 days. Project_P can be played up to 4 players in 1 session. I Lead this project on around 3 peoples, I'm assigned as the game programmer"
          img='Images/project_p.png'
          language={['Unity3d', 'C#', 'Photon Quantum']}
          buttons={
            [
              { btnName: 'Live Demo', href: 'https://jonathan-benedictus.itch.io/project-p' },
            ]}
        />


<ProjectCard
          title='HexPlanet'
          desc='A Game built prior to Binus Game Jam 2022 in 2 days. As Lead Developer'
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
          desc="Overwatch/TF2 reference based game, built for Global Game Jam 2022. Playable up to 6 Players. As Lead Multiplayer Programmer"
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