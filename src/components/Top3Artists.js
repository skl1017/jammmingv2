import { useEffect, useState } from "react";

function Top3Artists(props) {

    const [topArtistsongs, setTopArtistsongs] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');

        const getTopArtistsongs = async () => {
            const response = await fetch(`https://api.spotify.com/v1/artists/${props.artists[0].id}/top-tracks?market=US`, {
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + token }
            });
            const data = await response.json();
            setTopArtistsongs(data.tracks[0].id);
        }

        getTopArtistsongs();
    }, []);

    const artists = props.artists;

    console.log(artists);

    return (
        <>
            {topArtistsongs ? (
                <ol className="top3artists-grid h-full text-black w-full">
                    <li className='row-span-2 flex justify-start items-left flex-col p-4 topartist-bg1 rounded-2xl   w-full gap-1 text-lg h-full '>
                        <figure className=' w-full mb-8 h-3/6'>
                            <img className='rounded-xl w-full h-full object-cover' src={artists[0].images[0].url} alt="" />
                        </figure>
                        <p>Your favorite artist:</p>
                        <h3 className='font-bold text-2xl'>{artists[0].name}</h3>
                        <iframe
                            style={{ borderRadius: '12px' }}
                            src={`https://open.spotify.com/embed/track/${topArtistsongs}?utm_source=generator&theme=0`}
                            width="100%"
                            height="152"
                            allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className='mt-4'
                        ></iframe>
                    </li>
                    <li className='topartist-bg2 rounded-2xl p-4 h-full'>
                        <figure className='h-100 w-100 mb-8   '>
                            <img className='rounded-xl w-full h-full object-cover' src={artists[1].images[0].url} alt="" />
                        </figure>
                        <p>#2</p>
                        <h3 className='font-bold text-2xl'>{artists[1].name}</h3>
                    </li>
                    <li className='topartist-bg2 rounded-2xl p-4 h-full'>
                        <figure className='h-100 w-100 mb-8   '>
                            <img className='rounded-xl w-full h-full object-cover' src={artists[2].images[0].url} alt="" />
                        </figure>
                        <p>#3</p>
                        <h3 className='font-bold text-2xl'>{artists[2].name}</h3>
                    </li>
                </ol>
            ) : null}
        </>
    );
}

export default Top3Artists;
