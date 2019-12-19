import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About,Posts } from 'pages';
import {MyName,Counter,PhoneForm,PhoneInfo,PhoneInfoList,PhonebookInput} from 'Study';
import Menu from '../components/Menu'


class App extends Component {

    id = 2
    state = {
      information: [
        {
          id: 0,
          name: '김민준',
          phone: '010-0000-0000'
        },
        {
          id: 1,
          name: '홍길동',
          phone: '010-0000-0001'
        }
      ],
      keyword: '',
    }

    handleChange= (e) =>{
      this.setState({
          keyword:e.target.value, 
      });
    }
    
    handleCreate = (data) => {
      const { information } = this.state;
      this.setState({
        information: information.concat({ id: this.id++, ...data }) //이 문법은 이해가 안된다. 
      })
    }

    handleRemove = (id)=>{
      const {information} = this.state; 
      this.setState({
        information : information.filter(info=> info.id !== id)
      })
    }

    handleUpdate =(id,data)=>{

      const {information} = this.state; 
      this.setState({
        information : information.map(
          info=> id ===info.id? {...info,...data} : info)
      })
    }
    

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
                <Route path="/phonebook" render={()=>(
                <div>
                  <PhoneForm onCreate={this.handleCreate} />
                  <p>
                  <input 
                      placeholder="검색 할 이름을 입력하세요..."
                      onChange={this.handleChange}
                      value={this.state.keyword}
                  />
                  {/*input에 입력시 
                    App 컴포넌트의 상태가 업데이터 되면,
                    컴포넌트 리렌더링이 발생하게 되고,
                    컴포넌트가 리렌더링 되면 그 컴포넌트의 
                    자식 컴포넌트도 리렌더링 됩니다.
                  */}
                </p>
                  <PhoneInfoList data={this.state.information}
                                 onRemove={this.handleRemove}
                                 onUpdate={this.handleUpdate}
                  />
                </div>
                                                      )}/>
                                         {/*react Router로 props 보내는 방법*/}
                                         
            </div>
           
        );
    }
}

export default App;