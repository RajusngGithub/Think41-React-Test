import React, { useEffect, useState } from 'react';
function AnimatePlaying() {
    const [dotCount, setDotCount] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount(prev => (prev % 3) + 1);
    }, 300); 

    return () => clearInterval(interval);
  }, []);
  return (
        <span>
      Playing<span style={{ display: 'inline-block', width: '0.3em' }}>
        {".".repeat(dotCount)}
      </span>
    </span>
  )
}

export default AnimatePlaying
