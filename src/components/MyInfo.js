import React from 'react'
import '../styles/myInfo.css'

function MyInfo() {
  return (
    <div id='info'>
      <h1>GenzCoder</h1>
      <div className='lineInfo'>
        <span className='thickLine'></span>
        <span className='thinLine'></span>
      </div>
      <h2 >Full Stack <span >Developer</span></h2>
    </div>
  )
}

export default MyInfo
