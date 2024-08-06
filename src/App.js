import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Products from './pages/Products';
import About from './pages/About';
import Footer from './components/Footer';
import Browsers from './components/Browsers';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route exact path='/' component={Home} />
        <Route path='/Blog' component={Blog} />
        <Route path='/Products' component={Products} />
        <Route path='/About' component={About} />
      </Routes>
      <Browsers/>
      <Footer/>
    </Router>
  );
}

export default App;
