import './App.css';
import React, { useState } from 'react'

import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'


export default function App(){
  const page = 8;
  const apiKey = process.env.REACT_APP_NEWS_APTKEY

  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
      <Navbar />
      <LoadingBar
      color='#f11946'
      progress={progress}
      />
      <Switch>
        <Route  exact path="/">
          <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={page} country='in' category='General'/>
        </Route>
        <Route  exact path="/sports">
          <News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={page} country='in' category='Sports'/>
        </Route>
        <Route  exact path="/business">
          <News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={page} country='in' category='Business'/>
        </Route>
        <Route  exact path="/entertainment">
          <News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={page} country='in' category='Entertainment'/>
        </Route>
        <Route  exact path="/health">
          <News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={page} country='in' category='Health'/>
        </Route>
        <Route  exact path="/science">
          <News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={page} country='in' category='Science'/>
        </Route>
        <Route exact path="/technology">
          <News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={page} country='in' category='Technology'/>
        </Route>
      </Switch>
      </Router>
    </div>
  )
}