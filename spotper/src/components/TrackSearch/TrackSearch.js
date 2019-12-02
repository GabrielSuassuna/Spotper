import React, {useState,useEffect} from 'react';
import './TrackSearch.css';

import MusicCard from '../MusicCards/MusicCards'

import API from '../../API/API'

function TrackSearch(){

	const [search,setSearch]= useState('')
	const [data,setData] = useState([])

    useEffect(()=>{
        async function getData(){
            const res = await API.get('/showallmusic')
            setData(res.data)
        }
        getData()
    },[])

	function updateSearchTerm(e){
		setSearch(e.target.value)
	}

	  return(
		<>
			<div className='track-search-container'>
			<form>
				<input onChange={()=>console.log(data)} type='text' placeholder='Search...' />
				<button onClick={(e) => {e.preventDefault()}}>
				<i className="fa fa-search search" aria-hidden="true"/>
				</button>
			</form>
			</div>
			{
				data.map((music)=>{
					return(
					<section className="musicContainer">
						<section className="MusicExternalCard">
							<MusicCard className="MusicCard" 
							info = {music}/>
						</section>
					</section>	
						
					)
				})
			}
		</>
	  );
}

export default TrackSearch;