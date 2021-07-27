import React, { Component } from 'react'; 
class Subject extends Component{ //Subject라는 컴포넌트
    render(){ //렌더함수 필수 (class안에 들어가있으면 function 생략)
      // 최상위 태그가 필요함
      return (
        <header>  
            <h1><a href="/" onClick={function(e){
              e.preventDefault();
              this.props.onChangePage(); // 이벤트 발생시 props(부모에게 받아온 데이터)로 전달된 onChangePage함수 호출
            }.bind(this)}>{this.props.title}</a></h1>  
            {this.props.sub}
        </header>
      );
    } // {this.props.title} -> 리팩토리 props title="속성으로 내용변경가능"
  }
  
export default Subject;