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
		
    })

	async function updateSearchTerm(term){
		setSearch(term)
		const res = await API.get(`/getbysearch/${term}`)
		setData(res.data)
	}

	  return(
		<>
			<section className='track-search-container'>
			<form>
				<input onChange={(e)=>updateSearchTerm(e.target.value)} type='text' placeholder='Search...' />
				<button type="submit" onClick={(e) => {e.preventDefault()}}>
				<i className="fa fa-search search" aria-hidden="true"/>
				</button>
			</form>
			</section>

		<section>
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
		</section>
			
		</>
	  );
}

export default TrackSearch;