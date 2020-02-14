import React , {useState,useEffect,useCallback} from 'react';  

    //커스텀 hooks
    //export const 시 다른데서 import해서 사용할 수 있다. 
    export const useInput =(initValue = null) =>{
        const [value,setter] = useState(initValue); 
        const handler = useCallback((e) =>{
            setter(e.target.value); 
        },[])
        return [value,handler]; 
    }

const PhoneForm  =(props) =>{

    const {onCreate} = props
     const [name,onChangeName] = useInput(''); 
     const [phone,onChangePhone] = useInput(''); 


     const handleSubmit = (e) =>{
            e.preventDefault(); 
            onCreate({name,phone}); 
            //onCreate({name,phone}); 
            
     }


   

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="이름" 
                       value={name}
                       onChange={onChangeName}
                       name="name"
                />
                <input 
                       placeholder="전화번호"
                       value={phone}
                       onChange={onChangePhone}
                       name="phone"  
                />
                <button type="submit">등록</button>
                <button >클릭</button>
                
            </form>
            <div>{name} {phone}</div>
          
        </div>

    );
}

export default PhoneForm; 