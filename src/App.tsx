import React, { useEffect, useState } from 'react';
import screenfull from 'screenfull';
import moment from 'moment';
function App() {
  const [time, settime] = useState("00:00")

  useEffect(() => {
    const updateTime = () => {
      let dateString = moment().format("A hh:mm:ss")
      settime(dateString)
    }
    let timerId = setInterval(updateTime, 1000)
    return () => {
      clearInterval(timerId)
    }
  }, [])

  const full = () => {
    if (screenfull.isEnabled) {
      if (!document.exitFullscreen) {
        document.exitFullscreen();
      }else{
        screenfull.request()
      }
    }
    // if (!document.fullscreenElement) {
    //   document.documentElement.requestFullscreen();
    // } 
    // ref.current?.requestFullscreen()
  }

  return (
    <div className="App">
      {screenfull.isEnabled &&  <button onClick={full}>Full Test</button>}
      <h5>{time}</h5>
    </div>
  );
}

export default App;
