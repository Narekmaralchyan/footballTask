import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()
    
  return (
    <div className='Header'>
        <button onClick={()=>{navigate('/teams')}} className='navButton'>Clubs</button>
        <button onClick={()=>{navigate('/countries')}} className='navButton'>Countries</button>
        <button onClick={()=>{navigate('/leagues')}} className='navButton'>Leagues</button>
        <button onClick={()=>{navigate('/matches')}} className='navButton'>Latest Matches</button>
    </div>
  )
}
