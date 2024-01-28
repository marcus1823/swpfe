
import './App.css';
import Footer from './common/Layout/footer/Footer';
import { Header } from './common/Layout/header/Header';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import HotCategory from './components/HotCategory';
import SliderShow from './components/SliderShow';


function App() {
  const data = [
    {name: 'asd', src: '/images/bon-cau.webp', total: 'asdf'},
    {name: 'asd', src: '/images/bon-cau.webp', total: 'asdf'},
    {name: 'asd', src: '/images/bon-cau.webp', total: 'asdf'},
];

  const newProductsDataa = [
    {name: 'asd', src: '/images/bon-cau.webp', price: '10000vnd'},
    {name: 'asd', src: '/images/bon-cau.webp', price: '10000vnd'},
    {name: 'asd', src: '/images/bon-cau.webp', price: '10000vnd'},
];

  return (
    <>
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/" exact>
            <About />
          </Route> */}
        </Switch>
        <SliderShow />
        <HotCategory data={data} title={'Hot category'}/>
        <HotCategory data={newProductsDataa} title={'New products'}/>
      </Router>
    </>
  );
}

export default App;
