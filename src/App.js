import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home.js'
import OpFunc from './components/OpFunc.js'
import AddFunc from './components/AddFunc.js'
import SubFunc from './components/SubFunc.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
        <Routes>
          <Route path="op" element={<OpFunc />} />
          <Route path="add" element={<AddFunc />} />
          <Route path="sub" element={<SubFunc />} />
        </Routes>
    </div>
  );
}

export default App;
