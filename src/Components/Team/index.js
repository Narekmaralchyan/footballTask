import React, { memo } from 'react'

 function Team({name,logo,flag}) {
  return (
    <div className='Team'>
        <img className='teamLogo' alt={name} src={logo || flag} />
        <h4 className='teamName'>{name}</h4>
    </div>
  )
}
export default memo(Team)
