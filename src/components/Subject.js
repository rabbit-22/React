import React, { Component } from 'react'; 
class Subject extends Component{ //Subject라는 컴포넌트
    render(){ //렌더함수 필수 (class안에 들어가있으면 function 생략)
      // 최상위 태그가 필요함
      return (
        <header>  
            <h1>{this.props.title}</h1>  
            {this.props.sub}
        </header>
      );
    } // {this.props.title} -> 리팩토리 props title="속성으로 내용변경가능"
  }
  
export default Subject;