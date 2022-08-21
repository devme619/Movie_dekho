import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from './Pages/Movies/Movies'
import Trending from './Pages/Trending/Trending'
import Search from './Pages/Search/Search'
import Series from './Pages/Series/Series'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
      <Routes>
        <Route path='/' element={<Trending/>} exact/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/series' element={<Series/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
      </div>
      
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
