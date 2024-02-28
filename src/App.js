import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import AppNavBar from './pages/AppNavBar';
import CustomerPage from './pages/customerPage';
import { BrowserRouter,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Counter from './components/customers/counter';
import UseEffectDemo from './components/customers/useEffectDemo';
import Users from './components/customers/Users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AppNavBar/>
      <br/>
      <br/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/home" component={HomePage}/>
        <Route path="/customers" component={CustomerPage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/counter" component={Counter}/>
        <Route path="/useeffect" component={UseEffectDemo}/>
        <Route path="/users" component={Users}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
