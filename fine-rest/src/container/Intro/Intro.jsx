import React, { useRef, useState } from 'react'
import './intro.css'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal } from '../../constants'
function Intro() {

  const [playVideo, setplayVideo] = useState(false);
  const vidref = useRef();
  

  return (
    <>
      <div className="app__video">
        <video
          ref={vidref}
          src={meal}
          type="video/mp4"
          controls={false}
          loop
          muted
        />

        <div className="app__video-overlay flex__center" >
          <div className="app__video-overlay_circle flex__center"
            onClick={() => {
              setplayVideo(!playVideo);
                if (playVideo) {
                  vidref.current.pause();
                } else {
                  vidref.current.play();
                }
              }
            }
          >
            
            {playVideo ? (<BsPauseFill color='#fff' fontSize={30}/>) : (<BsFillPlayFill color='#fff' fontSize={30}/>) }

          </div>
        </div>
      </div>
    </>
  )
}

export default Intro