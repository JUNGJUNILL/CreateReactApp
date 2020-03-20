import React, { useState } from 'react';
import {PhoneForm} from 'P005_reactHooks'
import {PhoneInfoList} from 'P005_reactHooks'

const Btn = () =>{

    const [id,setId] = useState(2); 
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
      
        setId(id+1); 
        const addObject = {...data,id:id}
        setInformation(information=>[...information,addObject]);
    
    }

    const handleRemove =(id) =>{
        setInformation(information.filter((info)=>info.id !==id));
    }


    const handleUpdate = (id,data) =>{
        console.log('data',data); 
        setInformation(information.map(info=>id===info.id? {...info,...data}:info));
    }


    return (

        <div>
            <button onClick={()=>{setVisble(!visible);}}>{visible? '숨기기' : '보이기'}</button>
            <hr />
            {visible && <PhoneForm onCreate={handleCreate} />}
            <PhoneInfoList data={information} 
                           onRemove={handleRemove}
                           onUpdate={handleUpdate}
            />
        </div>
    
    );  


}

export default Btn; 
