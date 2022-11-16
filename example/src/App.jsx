import './App.css'

import Colors from 'kreattix-design-colors'

import reactLogo from './assets/react.svg'

function App() {
  return (
    <div className="App" style={{ background: Colors.primary }}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </div>
  )
}

export default App
