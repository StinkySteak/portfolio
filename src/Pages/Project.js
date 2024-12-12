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
          desc="STAGDRAFT is a Chaotic 2D multiplayer hack and slasher. Designed for intense PvP action and supports up to 24 players. Pick your role, strategize with your allies and dominate the battleground to capture all the zones and secure the final objectives in a domination warfare!"
          img='Images/project_stagdraft.png'
          language={['Unity3d', 'C#', 'Photon Fusion', 'Braincloud']}
          buttons={
            [
              { btnName: 'Download', href: 'https://store.steampowered.com/app/2128540/Stagdraft/' },
            ]}
        />

        <ProjectCard
          title='Mythical Adventure'
          desc='Embark on a captivating fantasy quest in "Mythical Adventure." Conquer floors and face formidable bosses to wield the powers of magic and become a legendary figure in a mesmerizing realm in "Mythical Adventure.'
          img='Images/project_ma.png'
          language={['Unity3d', 'C#', 'Firebase','Project Manager','ECS']}
          buttons={
            [
              { btnName: 'Download', href: 'https://play.google.com/store/apps/details?id=com.retiredgamer.mythicaladventure' },
            ]}
        />

        <ProjectCard
          title='Udemy Course: Multiplayer shooter in Unity using Netick'
          desc="Build a 3D Professional Online Multiplayer Game In Unity using Netick! Learn Netick networking with C#, 2024 Guide!"
          img='Images/project_udemy.png'
          language={['Unity3d', 'C#', 'Netick', 'Udemy']}
          buttons={
            [
              { btnName: 'Course Website', href: 'https://www.udemy.com/course/learn-to-create-a-competitive-shooter-in-unity-using-netick/?couponCode=ST19MT121224#reviews' },
            ]}
        />

        <ProjectCard
          title='Arena64.io'
          desc="Arena64 is a fast-paced, top-down shooter game. In this game players drop into the wide arena to fight against other players worldwide inspired by agar io, krunker io and slither io."
          img='Images/project_arena64.png'
          language={['Unity3d', 'C#', 'Netick', 'Cross-platform']}
          buttons={
            [
              { btnName: 'Play Now', href: 'https://arena64.io' },
            ]}
        />

        <ProjectCard
          title='Landscape Game 2'
          desc="Multiplayer educational game about sustainable landscape management. Discover the links between landscape management and commodity trading, and the impacts they can have on ecosystems"
          img='Images/project_lg2.png'
          language={['UE5', 'C++', 'Multiplayer', 'Game Designer']}
          buttons={
            [
              { btnName: 'Download', href: 'https://play.google.com/store/apps/details?id=com.agate.LandscapeGame2&hl=id' },
            ]}
        />

        <ProjectCard
          title='Open source Projects'
          desc="Maintain and create open source projects such as: learning sample, plugins, benchmarks, research."
          img='Images/project_github.png'
          language={['Github']}
          buttons={
            [
              { btnName: 'Learn More', href: 'https://github.com/StinkySteak' },
            ]}
        />
      </div>
    </div>
  )
}

export default Project