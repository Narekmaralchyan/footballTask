import React, { useEffect,useState } from 'react'
import Match from '../Match';

export default function LeagueResultMatches({currenLeagueId}) {
    const [matches,setMatches] = useState({ 
        data:[],
        meta:{
            pagination:{
                limit: null,
                offset:null,
                total:null,
            }
        }
    })
    
    useEffect(()=>{
        fetch(`https://dev-api.ultras.io/v1/matches?&leagueId=${currenLeagueId}`)
        .then(res=>res.json())
        .then(res=>{
            setMatches(res)
        })
    },[currenLeagueId])

    let loadId = null;
    function loadMore(e){
        let loadIsValid = e.target.scrollTop > e.target.scrollHeight * 0.6 && matches.data.length != matches.meta.pagination.total
        let {offset,limit} = matches.meta.pagination;
        if (loadIsValid && !loadId){
            loadId = setTimeout(()=>{
                fetch(`https://dev-api.ultras.io/v1/matches?leagueId=${currenLeagueId}&offset=${offset+limit}`)
                .then(res=>res.json())
                .then(res=>{
                    setMatches((prevState)=>{
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
    <div className='Result' onScroll={e=>{loadMore(e)}}>
        {matches.data.map(match=><Match key={match.id} {...match} />)}
    </div>
  )
}
