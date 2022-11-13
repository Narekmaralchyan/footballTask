import React, { useEffect, useState } from 'react'
import Team from '../Team'

export default function Teams() {
    const [state,setState] = useState({ 
        data:[],
        meta:{
            pagination:{
                limit: null,
                offset:null,
                total:null,
            }
        }
    })
    const [inputValue,setInputValue] = useState('')
    const [loading,setLoading ]= useState(true)
    
    useEffect(()=>{
        fetch('https://dev-api.ultras.io/v1/teams')
        .then(res=>res.json())
        .then(res=>{
            console.log('res', res)
            setState(res)
        })
        .finally(res=>{
            setLoading(false)
        })
    },[])

    function handleInput(e){
        setInputValue(e.target.value)
    }
    
    
    let loadId = null;
    function loadMore(e){
        let loadIsValid = e.target.scrollTop > e.target.scrollHeight * 0.7 && state.data.length != state.meta.pagination.total
        let {offset,limit} = state.meta.pagination;

        if (loadIsValid && !loadId){
            loadId = setTimeout(()=>{
                fetch(`https://dev-api.ultras.io/v1/teams?offset=${offset+limit}`)
                .then(res=>res.json())
                .then(res=>{
                    setState((prevState)=>{
                        return {
                            meta:res.meta,
                            data:[...prevState.data, ...res.data],
                        }
                    })
                })
            })
        }
        
    }

  return (
    <div className='Teams'>
        <input
            value={inputValue}
            onChange={e=>{handleInput(e)}}
            placeholder='search' 
            className='searchTeam' />
        <div onScroll={e=>{loadMore(e)}} className='teamsList'>
            { loading? "LOADING...": state.data.map(team=><Team key={team.id} {...team} />) }
        </div>
    </div>
  )
}
