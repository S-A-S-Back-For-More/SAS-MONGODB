import React from 'react'
import VideoBackground from '../components/VideoBckground'
import LoginForm from '../components/LoginForm'
function Home() {
  return (
    <div className='parent' style={{display: 'block'}}>
        <VideoBackground/>
        <div className="loginForm" style={{zIndex: '5',position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', height: '50%', width: '70%' }}>

        <LoginForm/>
        </div>

    </div>
  )
}

export default Home