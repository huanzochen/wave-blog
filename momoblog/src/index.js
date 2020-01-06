import React from 'react';
import ReactDOM from 'react-dom';


  class UI extends React.Component {
    render() {
      return (
        <div class="container-fluid">
          <div class="row">
            <div id="main" class="col-9 "><h1 class="title display-3"><span class="badge badge-secondary">茉茉部落格</span></h1></div>
            <div id="sidebar" class="col-3">
              <div class="inner">
                <nav id="menu">
                  <ul> 
                    <li class="list-group-item "><a class="sidebar_title list-group-item-action" href="https://www.google.com">註冊</a></li>
                    <li class="list-group-item "><a class="sidebar_title list-group-item-action" href="https://www.google.com">登入</a></li>
                    <li class="list-group-item "><a class="sidebar_title list-group-item-action" href="https://www.google.com">文章列表</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )
    }

  }


  
  ReactDOM.render(
    <UI />,
    document.getElementById('root')
  );


  

