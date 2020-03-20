import React, {useState} from 'react'
import TodoListTemplate from './components/TodoListTemplate'
import Form             from './components/Form'
import TodoItemList     from './components/TodoItemList'

const App = () =>{

    const id =3; 
    const [input, setInput] = useState('');
    const [todos,setTodos] =  useState([{ id: 0, text: ' 리액트 소개', checked: false },
                                        { id: 1, text: ' 리액트 소개', checked: true },
                                        { id: 2, text: ' 리액트 소개', checked: false }]);

    
                            


    const handleChange = (e)=>{
        setInput(e.target.value); 
    }                                     
    
    const handleCreate = ()=>{
     

      const array  = [...todos,{ id: 3, text: ' 리액트 소개개개', checked: false }]
      console.log(array);
      setTodos([...todos,array]); 

    }

    const handleKeyPress = (e)=>{
       
        if(e.key ==='Enter'){
            handleCreate(); 
        }
    }


    const handleToggle = (id) =>{

        //----------------------------------start 참으로 아름다운 구문이야....
        const index = todos.findIndex(todo=>todo.id === id); 
       
        const selected = todos[index]; 
        const nextTodos = [...todos]; 

        nextTodos[index] = {
            ...selected, 
            checked : !selected.checked, 
        }

        setTodos([...nextTodos]);
        //----------------------------------end  참으로 아름다운 구문이야....
    }

    const handleRemove = (id) =>{

            const filterTodos = todos.filter(todo=> todo.id !== id);
            setTodos([...filterTodos]);

    }

    return (

       <TodoListTemplate form={(
                                <Form 
                                    value={input}
                                    onChange={handleChange}
                                    onCreate={handleCreate}
                                    onKeyPress={handleKeyPress}
                                />
         )}>
           <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
       </TodoListTemplate>
    )

}

export default App; 