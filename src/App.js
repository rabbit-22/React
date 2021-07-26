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
      mode:'read', // 현재 보고 있는 페이지가 welcome 페이인지 read 페이지인지 구분하기 위함
      subject:{title:'WEB', sub:'World WIde Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!!'}, // 모드가 welcome일 때
      contents:[
        {id:1, title:'HTML', desc:'HTML is  for information ...'},
        {id:2, title:'CSS', desc:'CSS is  for design ...'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive ...'},
      ]
    } 
  } /* React에서는 props값이나 state 값이 바뀌면 그 state를 가지고 있는 컴포넌트의 render() 함수가 다시 호출됨 
       render() 함수 하위에 있는 컴포넌트의 render()함수도 다시 호출됨 (화면이 다시 그려짐) 
        => 링크를 클릭했을 때 다른 url을 타고 이동하지 않고 event를 발생시켜 state와 props를 변경함으로써
        페이지가 state와 props에 맞게 다시 출력됨 (싱글 페이지 웹앱)
        */
  render(){
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _title = this.state.welcome.desc;
    } else if(this.state.mode ==='read'){  // mode를 바꿀 때마다 title과 desc가 달라짐
      _title = this.state.contents[0].title;
      _title = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
        <MainWrap></MainWrap>
      </div>
    );
  }
}

export default App;
