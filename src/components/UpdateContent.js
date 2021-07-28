import React,  {Component} from 'react';

class UpdateContent extends Component{
  constructor(props){
    super(props);
    this.state = {
      title:this.props.data.title,
      desc:this.props.data.desc
    }
    this.inputFormHandler = this.inputFormHandler.bind(this); // 이렇게 해놓으면 bind(this) 안 써도 됨
  }
    inputFormHandler(e){
      this.setState({[e.target.name]:e.target.value}); // 대괄호 문법 e.target.name을 통해 target의 name값을 받아올 수 있음
    }
    render(){
      return(
        <article>
          <h2>Update</h2>
          <form action="/create_process" method="post"
           onSubmit={function(e){
             e.preventDefault();
             this.props.onSubmit(
               this.state.id,
               this.state.title,
               this.state.desc
             );
           }.bind(this)} 
          >
            <input type="hidden" name="id" value={this.state.id}></input> 
            <p>
              <input 
                type="text" 
                name="title" 
                placeholder="title" 
                value={this.state.title} 
                /* props 데이터는 readOnly(바뀌지않음)인데 value값을 지정해버리면 react가 중간에 개입함 
                   -> 컴포넌트 안에서 state화 시켜줘야함. onChange를 꼭 사용해줘야함 */
                onChange = {this.inputFormHandler}
                ></input>
              </p>
            <p>
              <textarea 
                name="desc" 
                placeholder="description" 
                value={this.state.desc}
                onChange = {this.inputFormHandler}
                >
              </textarea>
            </p>
            <p><input type="submit"></input></p>
          </form>
        </article>
      );
    }
  }

export default UpdateContent;