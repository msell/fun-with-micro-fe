import logo from './logo.svg'
import './App.css'
// import List from 'remote/List'
import React from 'react'

const List = React.lazy(() => import('remote/List'))
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <List />
      </header>
    </div>
  )
}

export default App
