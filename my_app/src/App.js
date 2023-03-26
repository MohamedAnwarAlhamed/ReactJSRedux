import './App.css';
import CAKECONTAINER from './components/CakeContainer';
import HOOKSCAKECONTAINER from './components/HooksCakeContainer';
import ICECREAMCONTAINER from './components/IceCreamContainer';
import HOOKSICECREAMCONTAINER from './components/HooksIceCreamContainer';

function App() {
  return (
    <div className="App">
      <CAKECONTAINER />
      <HOOKSCAKECONTAINER/>
      ##################################
      <ICECREAMCONTAINER/> 
      <HOOKSICECREAMCONTAINER/>

    </div>
  );
}

export default App;
