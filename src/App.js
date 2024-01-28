
import './App.css';
import Footer from './common/Layout/footer/Footer';
import { Header } from './common/Layout/header/Header';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/" exact>
            <About />
          </Route> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
