import React from 'react'
import './Playlist.css'
import AnimatePlaying from './AnimatePlaying'
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
                    {index === currentIndex?(<div className="button-group">
                        <button onClick={() => deleteSong(index)}>Delete</button>
                        <button onClick={() => jumpto(index)}><AnimatePlaying/></button>
                    </div>):(<div className="button-group">
                        <button onClick={() => deleteSong(index)}>Delete</button>
                        <button onClick={() => jumpto(index)}>Play</button>
                    </div>)}
                </li>))
                }
            </ul>
        </div>
    )
}

export default Playlist