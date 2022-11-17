import React, { useEffect, useState } from 'react'
import LeagueResultMatches from '../LeagueResultMatches'
import SearchLeagues from '../SearchLeagues'


export default function Leagues() {
    const [currenLeagueId,setCurrentLeagueId] = useState("")

  return (
    <div className='Leagues Comp'>
        <SearchLeagues setCurrentLeagueId={setCurrentLeagueId}  />
        <LeagueResultMatches currenLeagueId={currenLeagueId}  />
    </div>
  )
}
