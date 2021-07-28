import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import MainWrap from './components/MainWrap';
import Control from './components/Control';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';

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
  render(){
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _title = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode ==='read'){ 
      var i = 0;
      while(i<this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode==='create'){
      _article = <CreateContent onSubmit={function(_title, _desc){ // submit누를 시 contents 항목 추가
        // add content to this.state.contents
        this.max_content_id++;
        var _contents = this.state.contents.concat({
        /* state 값을 추가할 때는 push()와 같이 원본 데이터를 변경하는 함수 쓰지 말기
        concat()처럼 새로운 데이터를 추가하는 것을 사용 */
          id:this.max_content_id, title:_title, desc:_desc
        });
        this.setState({
          contents:_contents
        });
      }.bind(this)}></CreateContent>
    }
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
        {_article}
        <MainWrap></MainWrap>
      </div>
    );
  }
}

export default App;
