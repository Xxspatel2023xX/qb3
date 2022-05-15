import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {NavBar1, QuestionDisplayCollection} from "./ui-components";
import { Routes, Route } from 'react-router-dom'
import NewQuestion from './NewQuestion'
import EditQuestion from './EditQuestion';
class App extends Component {
  render() {
  return (
    <div className="App"><header className="App-header">
      <Routes>
        <Route exact path='/' element={<div><NavBar1/><QuestionDisplayCollection/></div>} />
        <Route exact path='/new' element={<NewQuestion/>} />
        <Route exact path='/edit/:cid'element={<EditQuestion/>} />
      </Routes>
      </header></div>
    );
}
}

export default withAuthenticator(App);