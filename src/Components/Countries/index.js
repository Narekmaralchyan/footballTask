import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Loading from '../Loading'
import Team from '../Team'

export default function Countries() {
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
    
    const { pathname } = useLocation()

    useEffect(()=>{
        let searchId = setTimeout(()=>{
            console.log("fetch");
            fetch(`https://dev-api.ultras.io/v1${pathname}?name=${inputValue}`)
            .then(res=>res.json())
            .then(res=>{
            setState(res)
                })
            .finally(res=>{
                setLoading(false)
            })
        },500)
    
            return ()=>{
            clearTimeout(searchId)
            }
      },[inputValue])
  
    let loadId = null;

    function loadMore(e){
        let loadIsValid = e.target.scrollTop > e.target.scrollHeight * 0.7 && state.data.length != state.meta.pagination.total
        let {offset,limit} = state.meta.pagination;

        if (loadIsValid && !loadId){
            loadId = setTimeout(()=>{
                fetch(`https://dev-api.ultras.io/v1${pathname}?offset=${offset+limit}`)
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
            onChange={e=>{setInputValue(e.target.value)}}
            placeholder='search' 
            className='searchTeam' />
        <div onScroll={e=>{loadMore(e)}} className='teamsList'>
            { loading? <Loading />: state.data.map(team=><Team key={team.id} {...team} />) }
        </div>
    </div>
  )
}
