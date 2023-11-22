import React from 'react';
import Top3Artists from './Top3Artists';

function TopArtists(props) {
    
        const topArtists = props.artists
 
    
        return (
            <div className='flex flex-col h-50vh'>
                <Top3Artists artists={topArtists.slice(0,3)} />

            </div>
        )
    }

export default TopArtists;