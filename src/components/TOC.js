import React, { Component } from 'react'; 

// react라는 라이브러리에서 component라는 클래스를 로딩
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
      );
    }
  }

export default TOC;
// 어떤 것(TOC라는 클래스)을 외부에서 사용할 수 있게 허용할 것인가