import React, { useEffect, useState } from 'react'
import Result from '../ResultMatches'
import Searching from '../Searching'

export default function Clubs() {
    const [currentTeamId, setcurrentTeamId]= useState("")

   return (
    <div className='Clubs Comp'>
        <Searching setcurrentTeamId={setcurrentTeamId} searchType='club' />
        <Result currentTeamId={currentTeamId}/>
    </div>
    )
}
