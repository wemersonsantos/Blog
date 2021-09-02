import Home from './pages/Home/Home'
import Sidebar from './components/Sidebar/Sidebar'
import ImgEureka from './components/ImgEureka/ImgEureka'

import './App.css';


function App() {
  return (
    <div className="App" id='outer-container'>

      <Home />
      <div id="page-wrap" className='mobileMenu'>
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      </div>
      <ImgEureka />

    </div>
  );
}

export default App;
