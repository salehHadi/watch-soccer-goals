import {Routes , Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import WatchPage from './components/WatchPage';
import LiveScore from './components/LiveScore';

function App() {

  
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/Watch' element={<WatchPage/>} />
        <Route exact path='/live' element={<LiveScore />} />
      </Routes>
    </div>
  );
}

export default App;
