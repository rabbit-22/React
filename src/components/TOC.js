import React, { Component } from 'react'; 

// react라는 라이브러리에서 component라는 클래스를 로딩
class TOC extends Component{
    render(){
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i<data.length){
        lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>)
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