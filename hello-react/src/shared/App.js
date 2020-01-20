import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About,Posts } from 'pages';
import Menu from '../components/Menu'
import {MyName,Counter} from 'P001_StudyComponent'
import {PhoneForm,PhoneInfo,PhoneInfoList,PhonebookInput} from 'P002_PhoneBookComponent';
import {TodoListTemplate,Form ,TodoItemList,Palette} from 'P003_TodoListComponent';

import {
        Button01,
        Alerts,
        Breadcrumb01,
        ButtonDropDown01,
        Fade
} from 'P004_reactStrap'

import 'bootstrap/dist/css/bootstrap.min.css';


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

      todos:[
          {id:0, text: '  리액트 소개', checked: false},
          {id:1, text: '  리액트 소개', checked: true},

      ],
      todosInput:'',
      keyword: '',
      color:'#343a40',



    }
//start P002_PhoneBookComponent---------------------------------------------
    handleChange= (e) =>{
      this.setState({
          keyword:e.target.value, 
      });
    }
    
    handleCreate = (data) => {
      const { information } = this.state;
      this.setState({
        information: information.concat({ id: this.id++, ...data }) //객체 spread 문법이다.
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
//end P002_PhoneBookComponent---------------------------------------------
    

//start P003_TodoListComponent---------------------------------------------
    toDohandleChange= (e)=>{
      this.setState({
        todosInput: e.target.value,
      });
    }

    toDohandleCreate = ()=>{
      const {todosInput, todos, color} = this.state; 
      console.log('todos.id==',todos.id,'color',color); 
      this.setState({
        todosInput:'',
        todos: todos.concat({
            id:this.id++,
            text:todosInput,
            checked:false, 
            color:color,
        })
      });
    }

    toDohandleKeyPress=(e) =>{
      if(e.key === 'Enter'){
        this.toDohandleCreate();
      }

    }

    toDoHandleToggle= (id) =>{
      console.log('toDoHandleToggle==>', id); 
      const {todos} = this.state; 

      const index = todos.findIndex(todo => todo.id ===id); 
      const selected = todos[index]; 
      const nextTodos = [...todos]; 

      nextTodos[index] = {
        ...selected,
        checked: !selected.checked, 
      }; 

      this.setState({
        todos:nextTodos,
      })

    }

    todohandleRemove =(id)=>{
      const {todos} = this.state; 
      this.setState({
        todos:todos.filter(todo=> todo.id !==id)
      })
    }

    todoColors = ()=>{
      const colorsArray = ['#343a40', '#f03e3e', '#12b886', '#228ae6']; 
      return colorsArray; 
    }

    todoOnSelector =(color)=>{
      this.setState({
        color:color
      })
    }
//end P003_TodoListComponent---------------------------------------------

//start P004_reactStrap---------------------------------------------


//end P004_reactStrap---------------------------------------------



//하단부 화면 
    render() {     

        const {information,keyword,color} = this.state; 
        const filterList = information.filter(
          info=> info.name.indexOf(keyword) !== -1
        ); 

        const colorsArray= this.todoColors(); 

        const { todosInput,todos } = this.state; 
        const {
              toDohandleChange,
              toDohandleCreate,
              toDohandleKeyPress,
              toDoHandleToggle,
              todohandleRemove,
              todoOnSelector

              } = this; 

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
                
                 
                
              
              
              
                {/*P002_PhoneBookComponent*/}
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
                  <PhoneInfoList data={filterList}
                                 onRemove={this.handleRemove}
                                 onUpdate={this.handleUpdate}
                  />
                </div>
                                                      )}/>
                                         {/*react Router로 props 보내는 방법*/}


                {/*P003_TodoListComponent*/}
                <Route path='/todoListtmplate' render={()=>(
                  
                  <TodoListTemplate form={<Form
                                              value={todosInput}
                                              onkeyPress={toDohandleKeyPress}
                                              onChange={toDohandleChange}
                                              onCreate={toDohandleCreate}
                                              color={color}
                                          />} 

                                    palette={<Palette 
                                                colors={colorsArray}
                                                selected={color}
                                                onSelect={todoOnSelector}
                                               
                                          />}   
                                          >
                                    
                                            
                     
                     <TodoItemList 
                                todos={todos} 
                                onToggle={toDoHandleToggle} 
                                onRemove={todohandleRemove}
                                />
                  </TodoListTemplate>
                  
          
                )} />

                <Route path='/reactStrapeButton' component={Button01}/> 
                <Route path='/reactStrapeAlerts' component={Alerts}/>
                <Route path='/reactStrapeBreadcrumb01' component={Breadcrumb01}/>
                <Route path='/reactStrapeButtonDropDown' component={ButtonDropDown01}/>                       
                <Route path='/reactStrapeFade' component={Fade}/>                       
            
                
            </div>
           
        );
    }
}

export default App;