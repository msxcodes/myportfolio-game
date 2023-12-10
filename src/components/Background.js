import React from 'react'
import Video from '../assets/bg-3.mp4'
import fallbackImg from '../assets/posterImg.png'
import '../styles/background.css'

function Background() {
  return (
    < >
        <div className='overlay'></div>
        <video 
            playsInline
            autoPlay
            muted
            loop
            preload='auto'
            id='bg'
            poster={fallbackImg}
        >
            <source src={Video} type='video/mp4' />
        </video>
    </>
  )
}

export default Background
