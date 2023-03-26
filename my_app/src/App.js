import './App.css';
import CAKECONTAINER from './components/CakeContainer';
import HOOKSCAKECONTAINER from './components/HooksCakeContainer';
import ICECREAMCONTAINER from './components/IceCreamContainer';
import HOOKSICECREAMCONTAINER from './components/HooksIceCreamContainer';
import NEWCAKECONTAINER from './components/NewCakeContainer';

function App() {
  return (
    <div className="App">
      <CAKECONTAINER />
      <HOOKSCAKECONTAINER/>
      ##################################
      <ICECREAMCONTAINER/> 
      <HOOKSICECREAMCONTAINER/>
      ####################################
      <NEWCAKECONTAINER/>

    </div>
  );
}

export default App;
