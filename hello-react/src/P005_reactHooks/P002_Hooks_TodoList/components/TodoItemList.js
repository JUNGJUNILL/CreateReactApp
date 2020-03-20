import React from 'react'
import './CSS/TodoItem.css'
import TodoItem from './TodoItem'

const TodoItemList = (props) =>{

    const {todos,onToggle,onRemove} = props; 
    const todoList = todos.map((todo)=>(
                                <TodoItem 
                                          {...todo}                                         
                                          onToggle={onToggle}
                                          onRemove={onRemove}
                                          key={todo.id}
                                />
    ))
    return (
        <div>
           {todoList}
        </div>
       
    );

}; 


export default TodoItemList; 