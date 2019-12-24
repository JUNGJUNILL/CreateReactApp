import React, { Component } from 'react';
import './TodoItem.css';


class TodoItem extends Component {



    render(){

        const {text,checked, id, onToggle, onRemove,color} = this.props; 
        console.log(id); 
        return (

            <div className="todo-item" onClick={() => onToggle(id)}>
            <div className="remove" onClick={(e) => {
              e.stopPropagation(); 
              //해당 컴포넌트의 최상위 DOM의 클릭 이벤트에는 onToggle을 넣어주고,
              //x가 있는 부분에선 onRemove를 넣어주었습니다. 
              //onRemove를 호출하는 곳을 보면 e.stopPropagation() 이라는 것이 호출되지요?
              //만약에 이 작업을 하지 않으면 x를 눌렀을 때 onRemove함수만 실행되는것이 아니라,
              //해당 DOM의 부모의 클릭 이벤트에 연결되어 있는 onToggle이 실행되는데,
              //onRemove -> onToggle 이렇게 실행이 되면서 코드가 의도치 않게 작동되어 삭제가
              //제대로 진행되지 않습니다. 
              //e.stopPropagation(); 는 이벤트 '확산'을 멈춰줍니다.
              //즉, 삭제 부분에 들어간 이벤트가 해당부모의 이벤트까지 전달되지 않도록 해줍니다.
              onRemove(id)}
             }>&times;</div>
            <div className={`todo-text${ checked? 'checked':''}`}>
                <div style={{color}}>{text}</div>
            </div>
            {
                checked && (<div className="check-mark"></div>)
            }
            </div>
        ); 
    }
}


export default TodoItem; 