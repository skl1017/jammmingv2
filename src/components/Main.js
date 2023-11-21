import {useEffect, useState, useMemo, useContext} from 'react';
import Navbar from './Navbar';
import UserInfoContext from '../UserInfoContext';


function Main() {

    const [timeRange, setTimeRange] = useState('long_term');
    const [currentTab, setCurrentTab] = useState('stats');
    const [topArtists, setTopArtists] = useState([]);
    const [topTracks, setTopTracks] = useState([]);

    const {userId, getUserId} = useContext(UserInfoContext);

    useEffect(() =>{
        getUserId();
    },[])
    

    useEffect(() =>{
        const token = localStorage.getItem('token');
        

        const getUsersTopArtists = async () => {
            const response = await fetch(`https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}&limit=5`, {
                method: 'GET',
                headers: { 'Authorization' : 'Bearer ' + token}
            });
            const data = await response.json();
            setTopArtists(data.items);
        }

        const getUsersTopTracks = async () => {
            const response = await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}&limit=20`, {
                method: 'GET',
                headers: { 'Authorization' : 'Bearer ' + token}
            });
            const data = await response.json();
            setTopTracks(data.items);
        }

        getUsersTopArtists();
        getUsersTopTracks();

    },[])

    useMemo(() =>{
        console.log(topArtists)
        console.log(topTracks)
    },[topArtists, topTracks])

    return(
        <article className='main-grid'>
            
            <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab}/>
               
            <section>
            </section>

            

        </article>
    )


}

export default Main;