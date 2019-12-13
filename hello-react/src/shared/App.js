import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About,Posts } from 'pages';
import Counter from 'Study/P002_Counter';
import MyName from 'Study/P001_MyName';
import Menu from '../components/Menu'


class App extends Component {
    render() {
        return (
         
              
            <div>   

                <Route  path="/" component={Menu}/>       
                <Route exact path="/" component={Home}/>
                {/*exact : 이게 붙어있으면 주어진 경로와 정확히 맞아 떨어져야만 설정한 컴포넌트를보여줍니다.*/
                /* exact 를 하지 않으면 두 컴포넌트가 같이 보여졌죠? /about 에도 / 가 있기 때문에, 매칭이 되어서 보여지는거랍니다.*/
                }
                <switch>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/about/:name" component={About}/>                              
                </switch>
                {/*
                switch 
                라우터들을 이 컴포넌트에 감싸면 매칭되는 첫번째 라우트만 보여주고 
                나머지는 보여주지 않습니다.
                */}
                <Route path="/posts" component={Posts}/>
                <Route path="/myname/:name" component={MyName}/>
                <Route path="/counter" component={Counter}/>
                 
        
            </div>
           
        );
    }
}

export default App;