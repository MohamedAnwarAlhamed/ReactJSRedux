import './App.css';
import CAKECONTAINER from './components/CakeContainer';
import HOOKSCAKECONTAINER from './components/HooksCakeContainer';
import ICECREAMCONTAINER from './components/IceCreamContainer';
import HOOKSICECREAMCONTAINER from './components/HooksIceCreamContainer';
import NEWCAKECONTAINER from './components/NewCakeContainer';
import ITEMCONTAINER from './components/ItemContainer';

function App() {
  return (
    <div className="App">
      <ITEMCONTAINER  cake/>
      ##################################
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
