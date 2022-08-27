import { useState } from 'react'
/* import Horloge from './components/Horloge/Horloge' */
import SlideBar from './components/SideBar/SlideBar'
import Horloge2 from './components/Horloge/Horloge2'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="flex bg-violet-500 max-h-max pb-96 text-2xl" id="App">
      <SlideBar/>
      <Horloge2/>
    </div>
  )
}

export default App
