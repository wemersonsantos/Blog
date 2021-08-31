import Home from './pages/Home/Home'
import Sidebar from './components/Sidebar/Sidebar'

import './App.css';


function App() {
  return (
    <div className="App" id='outer-container'>
      <Home/>
      <div id="page-wrap">
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
      </div>
    </div>
  );
}

export default App;
