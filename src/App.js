import './App.css';
import Navbar from './components/Navbar.tsx'
import Carousel from './components/Carousel.tsx'

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
          <Carousel />
        </body>
      </div>
    </>
  );
}

export default App;
