import React from 'react'
import TeamSection from '../Components/TeamSection'
import { teamData } from '../constants/data'

const Team = () => {
  return (
    <div>
         <TeamSection
                pageTitle="Our Key Team Members"
                teamData={teamData}
            />
    </div>
  )
}

export default Team