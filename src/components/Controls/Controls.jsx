import React from 'react'
import './Controls.css'
function Controls({
    previosBtn,
    nextBtn,
    btnDisplay
}) {
  return (
    <div className="controls">
      <button onClick={previosBtn} disabled={btnDisplay}>Previous Song</button>
      <button onClick={nextBtn} disabled={btnDisplay}>Next Song</button>
    </div>
  )
}

export default Controls
