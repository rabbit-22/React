import React, { Component } from 'react'; 

// react라는 라이브러리에서 component라는 클래스를 로딩
class TOC extends Component{
    render(){
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i<data.length){
        lists.push( // lists에 추가
        <li key={data[i].id}>
          <a 
            href={"/content/"+data[i].id}
            data-id={data[i].id}
            onClick={function(e){
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id); 
              // e.target은 이벤트가 발생한 태그 a를 가리킴. a태그 속성에 접근가능
              // 상위 컴포넌트 > props > 하위 컴포넌트
              // 하위컴포넌트 > 이벤트 실행 > 상위컴포넌트 state호출 > state값 수정
            }.bind(this)}
          >{data[i].title}</a>
          </li>)
        // key 값이 필요함
        i = i + 1;
      }
      return (
        <nav>
              <ul>
                  {lists}
              </ul>
          </nav>
      );
    }
  }

export default TOC;
// 어떤 것(TOC라는 클래스)을 외부에서 사용할 수 있게 허용할 것인가