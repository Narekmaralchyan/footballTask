import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Result from '../Result'
import ClubsSearch from '../ClubsSearch'

export default function Clubs() {
    const [currentTeamId, setcurrentTeamId]= useState("")

   return (
    <div className='Comp'>
         <ClubsSearch setcurrentTeamId={setcurrentTeamId} />
         <Result currentTeamId={currentTeamId}/>
    </div>
    )
}
