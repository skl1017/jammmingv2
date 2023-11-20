import React, { useState, useEffect } from 'react';

function Homepage() {
  function getImageFileNames() {
    const context = require.context('../images', false, /\.(jpg|jpeg|png|gif|webp)$/);
    return context.keys().map((key) => {
      const fileName = key.replace('./', '');
      return fileName;
    });
  }

  const imageFileNames = getImageFileNames();

  const [artistIndices, setArtistIndices] = useState([0, 1, 2]);

  

  return (
    <article className='flex w-11/12 justify-between'>
      <section className='w-6/12'>
        <h1 className='font-bold text-white text-160 text-left leading-normal line-height mb-12'>
          ja<span className='text-yellow'>m</span>
          <span className='text-green'>m</span>
          <br />
          <span className='text-blue'>m</span>ing.
        </h1>
        <h2 className='text-base ml-2'>
          Jammming: Your Spotify sidekick for personalized stats, curated playlists, and effortless music enjoyment. Explore your tunes like never before!
        </h2>
        <button className='mt-6 ml-2 orange-bg p-3 rounded-xl text-xl w-52 font-bold'>Connect to Spotify</button>
      </section>
      <section className='w-6/12 h-full flex flex-wrap flex-row-reverse gap-0 '>
        <figure className='w-56 h-56 '>
          <div className='absolute w-56 h-56 bg-yellow opacity-50'></div>
          <img
            className='w-full h-full object-cover'
            src={require(`../images/${imageFileNames[artistIndices[artistIndices[0]]]}`)}
            alt={`Artist 1`}
          />
        </figure>
        <figure className='w-56 h-56 '>
          <div className='absolute w-56 h-56 bg-green opacity-50 '></div>
          <img
            className='w-full h-full object-cover'
            src={require(`../images/${imageFileNames[artistIndices[1]]}`)}
            alt={`Artist 2`}
          />
        </figure>
        <figure className='w-56 h-56 '>
          <div className='absolute w-56 h-56 bg-blue opacity-50'></div>
          <img
            className='w-full h-full object-cover'
            src={require(`../images/${imageFileNames[artistIndices[2]]}`)}
            alt={`Artist 3`}
          />
        </figure>
      </section>
    </article>
  );
}

export default Homepage;
