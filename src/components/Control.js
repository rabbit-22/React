import React, { Component } from 'react'; 
class Control extends Component{ 
    render(){ 
      return (
        <ul>
            <li><a href="/create" onClick={function(e){ // 클릭시 모드 변경
               e.preventDefault();
               this.props.onChangeMode('create');
            }.bind(this)}>create</a></li>
            <li><a href="/update" onClick={function(e){
               e.preventDefault();
               this.props.onChangeMode('update');
            }.bind(this)}>update</a></li>     
            <li><input onClick={function(e){
               e.preventDefault();
               this.props.onChangeMode('delete');
            }.bind(this)} type="button" value="delete"></input></li>  {/*delete는 버튼으로 구현*/}
         </ul>
      );
  }
} 
export default Control;