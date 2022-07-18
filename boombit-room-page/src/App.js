import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/PageNavbar';
import Blog from './components/Blog';
import Formula from './components/Formula';
import Value from './components/Value';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Contact />
      <Value />
      <Blog />
      <Formula/>
      <Footer />
    </div>
  );
}

export default App;
