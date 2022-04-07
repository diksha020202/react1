//import logo from './logo.svg';
import './App.css';
import {Settings} from "./components/settings";
import {Download} from "./components/download";
import {Help} from "./components/help";
import {Home} from "./components/home";
import {Joinus} from "./components/joinus";
import {Login} from "./components/login";
import {Search} from "./components/search";
import {Contactus} from "./components/contactus";
import List1, {List2} from "./components/List"




function App() {
  return (
    <>
    <div className="app">
    <List1/>
    <List2/>
    </div>
    <h1>pr1</h1>
    <div className="maindiv">
      <div className="left">
       <Joinus/>
       <Login/>
       <Search/>
       <Home/>
      </div>
      <div className="right">
      <Settings/>
       <Contactus/>
       <Help/>
       <Download/>

      </div>
    </div>
  
      </>
  
  );

}


export default App; 

