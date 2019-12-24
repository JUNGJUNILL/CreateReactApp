import React, { Component } from 'react';
import TodoItem from './P004_TodoItem'; 


//이 컴포넌트는, 체크 값이 활성화되어있으면 우측에 체크마크 (✓ &#x2713;) 를 보여주고,
//마우스가 위에 있을때는 좌측에 엑스마크 (× &times;) 를 보여줍니다.

class TodoItemList extends Component{

    shouldComponentUpdate(nextProps,nextState){
   
        return this.props.todos !== nextProps.todos; 
        //return 값이 false이면 render 안함 
        //return 값이 true 이면 render 함 
    }

render(){
    const {todos,onToggle,onRemove} =this.props; 
    const todoList = todos.map(
        ({id, text, checked, color}) => 
            
          <TodoItem
            id={id}
            text={text}
            checked={checked}
            onToggle={onToggle}
            onRemove={onRemove}
            key={id}
            color={color}
          />
             
      );
    return (
        <div>
          {todoList}      
        </div>
    )
}


}

export default TodoItemList