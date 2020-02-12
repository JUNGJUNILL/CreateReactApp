import React, { useState } from 'react';
import {Hooks02} from 'P005_reactHooks'

const Btn = () =>{
    const id = 2; 
    const [visible,setVisble] = useState(false); 
    const [information,setInformation] = useState([{
                                                    id: 0,
                                                    name: '김민준',
                                                    phone: '010-0000-0000'
                                                },
                                                {
                                                    id: 1,
                                                    name: '홍길동',
                                                    phone: '010-0000-0001'
                                                }]);

    const handleCreate =(data)=>{
        console.log(data); 
        setInformation([{...data}]); 
        information.map((v)=>{
            console.log(v); 
        })

    }


    return (

        <div>
            <button onClick={()=>{setVisble(!visible);}}>{visible? '숨기기' : '보이기'}</button>
            <hr />
            {visible && <Hooks02 onCreate={handleCreate}/>}
            {JSON.stringify(information)}
        </div>
    
    );  


}

export default Btn; 
