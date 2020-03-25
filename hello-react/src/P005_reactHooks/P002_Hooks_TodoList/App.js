import React, {useState,useCallback} from 'react'
import TodoListTemplate from './components/TodoListTemplate'
import Form             from './components/Form'
import TodoItemList     from './components/TodoItemList'
import Palette          from './components/Palette'

const App = () =>{

    const [id,setId] = useState(3); 
    const [input, setInput] = useState('');
    const [todos,setTodos] =  useState([{ id: 0, text: ' 리액트 소개', checked: false },
                                        { id: 1, text: ' 리액트 소개', checked: true },
                                        { id: 2, text: ' 리액트 소개', checked: false }]);

    const [colorArray,setColorArray] = useState(['#343a40', '#f03e3e', '#12b886', '#228ae6']); 
    const [color , setColor] =  useState(colorArray[0]);

    
                            


    const handleChange = useCallback((e)=>{
        console.log('handleChange'); 
        setInput(e.target.value); 
    },[input]);                                      
    
    const handleCreate = ()=>{
      setId(id+1); 
      setTodos([...todos,{id: id, text: input, checked: false,color:color}]); 

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

    const colorSelector = (color) =>{
        setColor(color); 
    }



    return (

       <TodoListTemplate form={(
                                <Form 
                                    value={input}
                                    onChange={handleChange}
                                    onCreate={handleCreate}
                                    onKeyPress={handleKeyPress}
                                    color={color}
                                />
         )} palette={(
                                <Palette 
                                    colors={colorArray}
                                    selected={color}
                                    onSelect={colorSelector}

                                />
         )}>
                        
           <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} key={todos.id} />
       </TodoListTemplate>
    )

}

export default App; 