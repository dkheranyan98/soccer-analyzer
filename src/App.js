import './App.css';
import Leagues from './Leagues/Leagues';
import Container from './Container/Container';
import { Provider } from "react-redux";
import store from './store/store'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Leagues />
      <Container />
    </div>
    </Provider>
  );
}

export default App;
