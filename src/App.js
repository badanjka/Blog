import './App.css';
import MainPage from "./pages/MainPage/MainPage"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Header from "./components/Header/Header"
import Authors from "./pages/Authors/Authors"
import Footer from "./components/Footer/Footer"
import ChosenPost from "./components/ChosenPost/ChosenPost"
import {  Route,  Switch,} from "react-router-dom";
import WritersDetails from './components/WritersDetails/WritersDetails';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Switch>       
          <Route 
            path="/home/:id" component={ChosenPost}>
          </Route>
          <Route 
            path="/home" component={Home}>
          </Route>
          <Route
            path="/authors/:id" component={WritersDetails} >            
          </Route>
          <Route
            path="/authors" component={Authors} >
          </Route>
          <Route
            path="/about" component={About} >
          </Route>
          <Route
            path="/" component={MainPage}>
          </Route>
        </Switch>
        
    </div>
  );
}

export default App;
