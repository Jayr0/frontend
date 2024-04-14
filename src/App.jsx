import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Settings from './pages/Settings/Settings'
import Coin from './pages/Coin/Coin'

const App = () => {

  return (
    <body>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/coin" element={<Coin />} />
      </Routes>
    </body>
  )
}

export default App;
