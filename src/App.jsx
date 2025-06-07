import { useState } from 'react'
import './index.css'; 
import Hero from './Hero'
import About from './About'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
      <Hero />
      <About />
      
      
    </div>
  )
}

export default App
