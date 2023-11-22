import React from 'react';
import { useState, useEffect, useContext } from 'react';
import UserInfoContext from '../UserInfoContext';
import TopArtists from './TopArtists';


function YourStats() {
    const [timeRange, setTimeRange] = useState('long_term');
    const [topArtists, setTopArtists] = useState([]);
    const [topTracks, setTopTracks] = useState([]);

    const { userId, getUserId } = useContext(UserInfoContext);

    useEffect(() => {
        getUserId();
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');

        const getUsersTopArtists = async () => {
            const response = await fetch(`https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}&limit=10`, {
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + token }
            });
            const data = await response.json();
            setTopArtists(data.items);
        }

        const getUsersTopTracks = async () => {
            const response = await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}&limit=20`, {
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + token }
            });
            const data = await response.json();
            setTopTracks(data.items);
        }

        getUsersTopArtists();
        getUsersTopTracks();
    }, [])

    useEffect(() => {
        console.log(topArtists);
        console.log(topTracks);
    }, [topArtists, topTracks])

    return (
        <div className='w-full h-full p-5'>
            <h2 className='text-4xl p-2'>YOUR STATS</h2>

            {topArtists.length > 0 && topTracks.length > 0 ? (


                <div className='grid-cols-2 grid mt-20'>
                    <TopArtists artists={topArtists} />
                  
                </div>


            ) : (
                <p>Loading...</p>
           
            )}
        </div>
    )
}

export default YourStats;
