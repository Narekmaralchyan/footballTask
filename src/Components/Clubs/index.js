import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ClubsSearch from '../ClubsSearch'
import Result from '../ResultMatches'

export default function Clubs() {
    const [currentTeamId, setcurrentTeamId]= useState("")

   return (
    <div className='Comp'>
        <ClubsSearch setcurrentTeamId={setcurrentTeamId} />
         <Result currentTeamId={currentTeamId}/>
    </div>
    )
}
