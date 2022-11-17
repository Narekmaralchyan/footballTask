import React,{memo} from 'react'


 function LeagueItem({name,id,logo,flag,setCurrentLeagueId}) {
  return (
    <div onClick={()=>{setCurrentLeagueId(id)}} className='Team'>
        <img className='teamLogo' alt={name} src={logo || flag} />
        <h4 className='teamName'>{name}</h4>
    </div>
  )
}
export default memo(LeagueItem)

