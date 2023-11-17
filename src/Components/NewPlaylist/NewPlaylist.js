//import React from 'react'
import './style.css';

const NewPlaylist = () => {
  return (
    <div className='NewPlaylist'>
        <h2>Your new playlist</h2>
        <ul>
          <li>
            Una vaina Loca
          </li>
          <li>
            Ella baila sola
          </li>
        </ul>
        <button className='SaveToSpotify'>
            Save to Spotify
        </button>
    </div>
  )
};

export default NewPlaylist;