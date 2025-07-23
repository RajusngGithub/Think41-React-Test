import React from 'react'
import './CurrentSong.css'
function CurrentSong(
    {
        songs,
        currentIndex
    }
) {
  return (
    <div>
      <p className="current-song">{songs.length === 0 
    ? "No songs in playlist" 
    : `Now Playing: ${songs[currentIndex]}`}</p>
    </div>
  )
}

export default CurrentSong
