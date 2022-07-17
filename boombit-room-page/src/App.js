import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/PageNavbar';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Contact />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
