import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import MainWrap from './components/MainWrap';

class App extends Component{
  constructor(props){
    super(props); // 어떤 컴포넌트가 실행될때 render()보다 먼저 실행되면서 초기화를 담당하는 코드를 cunstructor 안에 작성
    this.state = { // 상위 컴포넌트의 state 값을 하위 컴포넌트의 props값으로 전달하는 것은 얼마든지 가능하다
      subject:{title:'WEB', sub:'World WIde Web!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is  for information ...'},
        {id:2, title:'CSS', desc:'CSS is  for design ...'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive ...'},
      ]
    }
  }
  render(){
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="우왕.."></Content>
        <MainWrap></MainWrap>
      </div>
    );
  }
}

export default App;
