import React, { memo } from 'react'

 function Team({name,logo}) {
    console.log("team componenty render exav");
  return (
    <div className='Team'>
        <img className='teamLogo' alt={name} src={logo} />
        <h4 className='teamName'>{name}</h4>
    </div>
  )
}
export default memo(Team)
