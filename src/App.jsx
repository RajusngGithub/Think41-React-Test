import { useState } from 'react';
import './App.css'
import './index.css';
import './Responsive.css'
import AddSongForm from './components/AddSongForm/AddSongForm';
import CurrentSong from './components/CurrentSong/CurrentSong';
import Controls from './components/Controls/Controls';
import Playlist from './components/Playlist/Playlist';
function App() {
  const [songTitleArr, setSongTitleArr] = useState([])
  const [currentIndex, setcurrentIndex] = useState(0)
  const [song, setSong] = useState("")
 let isEmptyPlaylist=songTitleArr.length===1 || songTitleArr.length===0;
  const handleAddSong =()=>{
    if (song) {
      setSongTitleArr([...songTitleArr,song]);
    }
    setSong('');
    
  }
  const handleNext =()=>{
    if (songTitleArr.length === 0) return;
    if (currentIndex===songTitleArr.length-1) {
      setcurrentIndex(0);
    }
    else{
      setcurrentIndex((prev)=> prev+1)
    }
  }
  const handlePrev =()=>{
    if (songTitleArr.length === 0) return;
    if (currentIndex<=0) {
      setcurrentIndex(songTitleArr.length-1)
    }
    else{

      setcurrentIndex((prev)=> prev-1)
    }
  }
  const handleJumpTo =(ind)=>{
    setcurrentIndex(ind)
  }
const handleDelete = (delSongInd) => {
  setSongTitleArr((prev) => {
    const updated = prev.filter((_, i) => i !== delSongInd);
    if (updated.length === 0) {
      setcurrentIndex(0); 
    } else if (delSongInd === currentIndex) {
      setcurrentIndex(0);
    } else if (delSongInd < currentIndex) {
      setcurrentIndex((prevIndex) => prevIndex - 1);
    }

    return updated;
  });
};

  return (
    <>
    <div className='container'>
    <h1>Music Player</h1>
    <AddSongForm song={song} updateSong={(e)=>setSong(e.target.value)} addSong={handleAddSong}/>
      <CurrentSong songs={songTitleArr} currentIndex={currentIndex}/>
      <Controls previosBtn={handlePrev} nextBtn={handleNext} btnDisplay={isEmptyPlaylist}/>
      <Playlist playlist={songTitleArr} currentIndex={currentIndex} jumpto={handleJumpTo} deleteSong={handleDelete}/>
    </div>
    </>
  )
}

export default App
