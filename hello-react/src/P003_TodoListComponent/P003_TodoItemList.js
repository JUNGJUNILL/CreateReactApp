import React, { Component } from 'react';
import TodoItem from './P004_TodoItem'; 


//이 컴포넌트는, 체크 값이 활성화되어있으면 우측에 체크마크 (✓ &#x2713;) 를 보여주고,
//마우스가 위에 있을때는 좌측에 엑스마크 (× &times;) 를 보여줍니다.

class TodoItemList extends Component{

render(){
    const {todos,onToggle,onRemove} =this.props; 

    return (
        <div>
            <TodoItem text="안녕"/>        
            <TodoItem text="리액트"/>        
            <TodoItem text="반가워"/>        

        </div>
    )
}


}

export default TodoItemList