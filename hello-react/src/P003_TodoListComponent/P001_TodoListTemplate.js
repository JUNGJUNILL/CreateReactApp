import React from 'react'; 
import './TodoListTemplate.css';
import './Palette.css';

const TodoListTemplate = ({form,children,palette})=>{
                            //비구조화할당 props들... 

    return (

        <main className="todo-list-template">
            <div className="title">
                오늘 할 일 
            </div>
            <section className>
                {palette}
            </section>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>


        </main>

    ); 


}

export default TodoListTemplate; 