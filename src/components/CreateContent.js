import React,  {Component} from 'react';

class CreateContent extends Component{
    render(){
      return(
        <article>
          <h2>Create</h2>
          <form action="/create_process" method="post"
           onSubmit={function(e){
             e.preventDefault();
             this.props.onSubmit(
               e.target.title.value,
               e.target.desc.value
             );
           }.bind(this)} 
           /* form태그에 onSubmit을 설치해놓으면 submit버튼을 클릭했을 때 이벤트가 실행되도록 약속되어있음 (html기능)*/
          >
            <p><input type="text" name="title" placeholder="title"></input></p>
            <p><textarea name="desc" placeholder="description"></textarea></p>
            <p><input type="submit"></input></p>
          </form>
        </article>
      );
    }
  }

export default CreateContent;