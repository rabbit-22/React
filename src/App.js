import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class MainWrap extends Component{
  render(){
    return(   
      <div class="main_wrap">
        Hello
    </div>
    )
  }
}
class TOC extends Component{
  render(){
    return (
      <nav>
            <ul>
                <li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">JavaScript</a></li>
            </ul>
        </nav>
    )
  }
}


class Subject extends Component{ //Subject라는 컴포넌트
  render(){ //렌더함수 필수 (class안에 들어가있으면 function 생략)
    // 최상위 태그가 필요함
    return (
      <header>  
          <h1>{this.props.title}</h1>  
          {this.props.sub}
      </header>
    )
  } // {this.props.title} -> 리팩토리 props title="속성으로 내용변경가능"
}


class Content extends Component{
  render(){
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    )
  }
}

class App extends Component{
  render(){
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web"></Subject>
        <TOC></TOC>
        <Content title="HTL" desc="우왕.."></Content>
        <MainWrap></MainWrap>
      </div>
    );
  }
}

export default App;
