import NavigationBar from './pages/NavigationBar';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Project from './pages/Project';


function App() {
  return (
    <div>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>

        
        
        

        
      </Routes>


      

      </div>
  );
}

export default App;
