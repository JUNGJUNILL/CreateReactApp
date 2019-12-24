import React from 'react';
import './Form.css';


const Form = ({value,onChange,onCreate,onkeyPress,color}) =>{

    return (
       
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onkeyPress} style={{color}}/>
            <div className="create-button" onClick={onCreate}>
                추가 
            </div>
        </div>

    )


}

export default Form; 