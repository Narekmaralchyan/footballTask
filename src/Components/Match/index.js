import React from 'react'

export default function Match({id,league,teamAway,teamHome,goalsAway,goalsHome}) {
  return (
    <div className='Match'>
        <div className='leagueInfo'>
            <p>{league.country.name} |</p>
            <p>{league.name}</p>
        </div>
        <div className='teams'>
            <div className='matchTeamLogos'>
                <img className='matchTeamLogo' src={teamHome.logo} />
                <img className='matchTeamLogo' src={teamAway.logo}/>
            </div>
            <div className='addInfo'>
                <img className='leagueLogo' src={league.logo}/>
            </div>
        </div>
        <div className='result'>
            <p>{teamHome.name} </p>
            <p>{teamAway.name} </p>
        </div>

    </div>
  )
}
