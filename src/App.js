import logo from './logo.svg';
import './App.css';
import { Header } from './Components/navbar/Navbar';
import { ElementLayout2 } from './Components/layout2/Layout2';
import { ElementLayout3 } from './Components/Layout3/Layout3';
import { ElementLayout4 } from './Components/Layout4/Layout4';
import { ElementLayout5 } from './Components/Layout5/Layout5';
import { ElementLayout6 } from './Components/Layout6/Layout6';
import { Footer } from './Components/Layout7/Layout7';

function App() {
  return (
    <div className="App">
     <Header/>
     <ElementLayout2/>
     <ElementLayout3/>
     <ElementLayout4/>
     <ElementLayout5/>
     <ElementLayout6/>
     <Footer/>
    </div>
  );
}

export default App;
