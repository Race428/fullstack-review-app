import React from 'react';
import {Provider} from 'react-redux'
import store from './Redux/store'
import './App.css';
import {HashRouter} from 'react-router-dom'
import Navbar from './Components/Navbar'
import router from '../'
function App() {
  return (
    <Provider store ={store}>
      <HashRouter>
        <Navbar/> 
      </HashRouter>
    </Provider>
  );
}

export default App;
