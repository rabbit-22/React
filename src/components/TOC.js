import React, { Component } from 'react'; 

class TOC extends Component{
    shouldComponentUpdate(newProps, newState){ // 이 함수의 매개변수는 newProps, newState로 약속되어있음
      console.log(newProps.data, this.props.data);
      if(this.props.data === newProps.data){
        return false;  
        // push()를 사용한다면 if문으로 조건을 붙일 수 없음. concat()을 사용했기 때문에 원본값과 변경값을 비교가 가능했던 것 
      }
      return true;
      /* shouldComponentUpdate()는 render 함수를 실행할지 실행안할지를 결정하는 함수
         이 함수의 return값이 false라면 react는 그 밑의 render()함수를 읽지 않는다. 
         (contents가 바뀌지 않는다면 render()는 호출될 필요가 없지만, 현재 코드에서는 모든 act에 render가 실행되고 있음. 이를 방지하기 위한 함수)
      */
    }
    render(){
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i<data.length){
        lists.push( 
        <li key={data[i].id}> {/*key 값이 필요함*/} 
          <a 
            href={"/content/"+data[i].id}
            data-id={data[i].id}
            onClick={function(e){
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id); 
            }.bind(this)}
          >{data[i].title}</a>
          </li>)
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