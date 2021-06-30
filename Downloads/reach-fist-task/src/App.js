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
import NavBar from "./components/navbar"



function App() {
  return (
    <Provider store={store}>
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/"> <StepperFormPage/> </Route>
    </Switch>
    </Router>
  </Provider>
  );
}

export default App;
