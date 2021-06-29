import './index.css'
import store from './redux/store'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import StepperFormPage from './pages/stepper-form';



function App() {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
        <Route path="/"> <StepperFormPage/> </Route>
        </Provider>
    </Switch>
    </Router>
  );
}

export default App;
