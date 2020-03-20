import React from 'react'
import './CSS/TodoItem.css'

const TodoItem = (props) =>{

    const {text, checked, id, onToggle, onRemove, key} = props; 
    
    return(
        <div className="todo-item" onClick={()=>onToggle(id)}>
            <div className="remove" onClick={(e)=>{
                                                    e.stopPropagation(); //onToggle이 실행되지 않도록 한다.  
                                                                         //이벤트의 "확산"을 멈춰줍니다. 즉, 삭제부분에 들어간 이벤트가
                                                                         //해당 부모의 이벤트까지 전달되지 않도록 해준다. 
                                                    onRemove(id)
                                            }}>&times;</div>
            <div className={`todo-text ${checked && 'checked'}`}>
                <div>{text}</div>
            </div>
            {
                checked && (<div className="check-mark"></div>)
            }
        </div>
    ); 

}; 

export default TodoItem; 