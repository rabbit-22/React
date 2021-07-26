import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import MainWrap from './components/MainWrap';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="우왕.."></Content>
        <MainWrap></MainWrap>
      </div>
    );
  }
}

export default App;
