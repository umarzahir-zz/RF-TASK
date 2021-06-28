import './index.css'
import store from './redux/store'
import { Provider } from 'react-redux'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <p>pakistan 123</p>
      </div>
    </Provider>
  );
}

export default App;
