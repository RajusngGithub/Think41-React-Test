import React from 'react'
import './Playlist.css'
function Playlist({
    playlist,
    currentIndex,
    jumpto,
    deleteSong
}) {
    return (
        <div>
            <ul>
                {playlist.map((song, index) => (<li
                    key={index}
                    style={{ background: index === currentIndex ? 'yellow' : 'transparent' }}
                >
                    {song}
                    <div className="button-group">
                        <button onClick={() => deleteSong(index)}>Delete</button>
                        <button onClick={() => jumpto(index)}>Play</button>
                    </div>
                </li>))
                }
            </ul>
        </div>
    )
}

export default Playlist