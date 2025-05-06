import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import ProfileViewer from './ProfileViewer'
import ProfileViewWithSearch from './ProfileViewerWithSearch'
import TimerWrapper from './TimerWrapper'
import Video from './Video'
import Focuser from './Focser'
import Timer2 from './Timer2'



function App() {
  return(
    <div className='App'>
{/* <TimerWrapper/>
<Counter/>
<ProfileViewer name={'Colt'} color="teal"/>
<ProfileViewer name={'Mat'} color="orange"/>
<ProfileViewWithSearch/>
<Video/> */}
{/* <Focuser/> */}
<Timer2/>
    </div>
  )
}

export default App
