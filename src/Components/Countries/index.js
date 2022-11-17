import React, { useState } from 'react'
import Result from '../ResultMatches'
import Searching from '../Searching'

export default function Countries() {
    const [currentTeamId,setcurrentTeamId] = useState("")

  return (
    <div className='Countries Comp'>
        <Searching setcurrentTeamId={setcurrentTeamId} searchType='national' />
        <Result currentTeamId={currentTeamId} />
    </div>
  )
}
