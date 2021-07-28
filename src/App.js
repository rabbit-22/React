import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import MainWrap from './components/MainWrap';
import Control from './components/Control';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

class App extends Component{
  constructor(props){ 
    super(props); // 어떤 컴포넌트가 실행될때 render()보다 먼저 실행되면서 초기화를 담당하는 코드를 cunstructor 안에 작성
    this.max_content_id = 3;
    this.state = { // 상위 컴포넌트의 state 값을 하위 컴포넌트의 props값으로 전달하는 것은 얼마든지 가능하다
      mode:'create', // 기본 모드를 create로 설정
      selected_content_id:2,
      subject:{title:'WEB', sub:'World WIde Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!!'}, 
      contents:[
        {id:1, title:'HTML', desc:'HTML is  for information ...'},
        {id:2, title:'CSS', desc:'CSS is  for design ...'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive ...'}
      ] 
    } 
  } 
getReadContent(){
  var i = 0;
    while(i<this.state.contents.length){
      var data = this.state.contents[i];
      if(data.id === this.state.selected_content_id){
        return data;
        break;
      }
      i = i + 1;
    }
}
getContent(){
  var _title, _desc, _article = null;
  if(this.state.mode === 'welcome'){
    _title = this.state.welcome.title;
    _title = this.state.welcome.desc;
    _article = <ReadContent title={_title} desc={_desc}></ReadContent>
  } 
  else if(this.state.mode ==='read'){ 
    var _content = this.getReadContent();
    _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
  } 
  else if(this.state.mode==='create'){
    _article = <CreateContent onSubmit={function(_title, _desc){ 
      this.max_content_id++;
      var _contents = Array.from(this.state.contents); 
      // 객체를 바꾸고싶으면 Array.assign, 배열을 바꾸고 싶으면 Array.from
      _contents.push({id:this.max_content_id, title:_title, desc:_desc});
      // push를 사용하고 싶다면 원본을 복제하여 수정한 값을 할당 (immutable.js 등 라이브러리 활용도 가능)
      this.setState({
        contents:_contents,
        mode:'read'
      });
    }.bind(this)}></CreateContent>
  } 
  else if(this.state.mode === 'update'){
    _content = this.getReadContent();
    _article = <UpdateContent data={_content} onSubmit={
      function(_id, _title, _desc){ 
        var _id = _content.id; 
        var _contents = Array.from(this.state.contents); // 배열이나 객체를 수정하려고 할때는 복제한 후 수정한다 
        var i = 0;
        while(i < _contents.length){
          if(_contents[i].id === _id){
            _contents[i] = {id:_id, title:_title, desc:_desc};
            break;
          }
          i = i + 1;
        }
        this.setState({
          contents:_contents,
          mode:'read'
        });
    }.bind(this)}></UpdateContent>
  }
  return _article;
}
render(){
  return (
      <div className="App">
        <Subject
         title={this.state.subject.title} 
         sub={this.state.subject.sub}
         onChangePage={function(){
            this.setState({mode:'welcome'}); 
         }.bind(this)}>
        </Subject>
        <TOC 
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            });
        }.bind(this)} 
        data={this.state.contents}>
        </TOC>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          })
        }.bind(this)}></Control>
        {this.getContent()}
        <MainWrap></MainWrap>
      </div>
    );
  }
}

export default App;
