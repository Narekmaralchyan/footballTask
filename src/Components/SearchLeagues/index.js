import React, { memo, useEffect, useState } from 'react'
import LeagueItem from '../LeagueItem'
import Loading from '../Loading'
import Team from '../Team'

function SearchingLeagues({setCurrentLeagueId}) {
    
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
    const [loading,setLoading ]= useState(true)
    useEffect(()=>{
            setLoading(true)
            fetch(`https://dev-api.ultras.io/v1/leagues`)
            .then(res=>res.json())
            .then(res=>{
                setState(res)
                })
            .finally(res=>{
                setLoading(false)
            })
      },[])
      
    let searchId = null;
    function searcHandle(e){
            if(searchId) clearTimeout(searchId);
            searchId = setTimeout(()=>{
            fetch(`https://dev-api.ultras.io/v1/leagues?name=${e.target.value}`)
            .then(res=>res.json())
            .then(res=>{
            setState(res)
                })
        },500)
        
    }

    let loadId = null;
    function loadMore(e){
        let loadIsValid = e.target.scrollTop > e.target.scrollHeight * 0.7 && state.data.length != state.meta.pagination.total
        let {offset,limit} = state.meta.pagination;

        if (loadIsValid && !loadId){
            loadId = setTimeout(()=>{
                fetch(`https://dev-api.ultras.io/v1/leagues?offset=${offset+limit}`)
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
            onChange={e=>{searcHandle(e)}}
            placeholder='search'
            className='searchTeam' />
        <div onScroll={e=>{loadMore(e)}} className='teamsList'>
            { loading? <Loading />: state.data.map(team=><LeagueItem setCurrentLeagueId={setCurrentLeagueId} key={team.id} {...team} />) }
        </div>
    </div>
  )
}

export default memo(SearchingLeagues)
