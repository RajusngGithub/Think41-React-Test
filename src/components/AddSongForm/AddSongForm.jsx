import React from 'react'
import './AddSongForm.css'
function AddSongForm({
    song,
    updateSong,
    addSong
}) {
  return (
    <div>
      <input type="text" value={song} onChange={updateSong} placeholder='Enter Song' />
      <button onClick={addSong}>Add Song</button>
    </div>
  )
}

export default AddSongForm
