import { useState } from 'react'
import shuumopfp from '/shuumopfp.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://github.com/shuumo" target="_blank">
          <img src={shuumopfp} className="logo" alt="Shuumo logo" />
        </a>
      </div>
      <h1>Shuumos Portfolio Site 🔥</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Arnav "Shuumo" S.
      </p>
    </>
  )
}

export default App
