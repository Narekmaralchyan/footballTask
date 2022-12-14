import React, { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom';
import Match from '../Match';

export default function Result({currentTeamId}) {
    const [currentTeamMatches,setcurrentTeamMatches] = useState({})
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
        fetch(`https://dev-api.ultras.io/v1/matches?teamId=${currentTeamId}`)
        .then(res=>res.json())
        .then(res=>{
            setMatches(res)
            console.log('res', res)
        })
    },[currentTeamId])

    let loadId = null;
    function loadMore(e){
        let loadIsValid = e.target.scrollTop > e.target.scrollHeight * 0.6 && matches.data.length != matches.meta.pagination.total
        let {offset,limit} = matches.meta.pagination;
        if (loadIsValid && !loadId){
            console.log("ifi mejem");
            loadId = setTimeout(()=>{
                fetch(`https://dev-api.ultras.io/v1/matches?teamId=${currentTeamId}&offset=${offset+limit}`)
                .then(res=>res.json())
                .then(res=>{
                    console.log('res-----load more', res)
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
