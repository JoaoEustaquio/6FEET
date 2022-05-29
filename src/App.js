import './App.css';
import Navbar from './components/Navbar.tsx'
import Slider from './components/Carousel.tsx'

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Navbar
            display='flex' />
        </header>
      </div>
      <div>
        <body>
          <Slider padding-top="20px" />
        </body>
      </div>
    </>
  );
}

export default App;
