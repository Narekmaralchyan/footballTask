import React, { memo } from 'react'

 function Team({name,id,logo,flag,setcurrentTeamId}) {
  return (
    <div onClick={()=>{setcurrentTeamId(id)}} className='Team'>
        <img className='teamLogo' alt={name} src={logo || flag} />
        <h4 className='teamName'>{name}</h4>
    </div>
  )
}
export default memo(Team)
