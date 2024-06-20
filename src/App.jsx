import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UnicodeInput from './UnicodeInput'

function App() {
  const [content, setContent] = useState("(nothing)")

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Unicode Input Test</h1>
      <div className="card">
        <UnicodeInput />
        <p>
          The content of the input is.
        </p>
        <pre>
        <code>{content}</code>
        </pre>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
