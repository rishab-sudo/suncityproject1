import React from 'react'
import Experties from '../Components/Experties'
import { expertiesData } from '../constants/data'

const Service = () => {
  return (
    <div>
         <Experties
                pageTitle="OUR EXPERTIES"
                expertiesData={expertiesData}
            />
    </div>
  )
}

export default Service