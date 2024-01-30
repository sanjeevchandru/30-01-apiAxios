
import './App.css';
import { Routing } from './Rouing';
import { Provider } from 'react-redux';
import { Store } from './api/store/Store';
function App() {
  return (
    <div className="App">
      <Provider store={Store}>
      <Routing/>
      </Provider>
      
    </div>
  );
}

export default App;
