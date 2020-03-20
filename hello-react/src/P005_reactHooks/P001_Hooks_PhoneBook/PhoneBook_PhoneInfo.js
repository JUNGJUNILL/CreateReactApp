import React,{useState,useEffect,useRef,useCallback} from 'react'
import { useParams } from 'react-router-dom';


const usePrevious = (value)=>{
    const ref= useRef(); 
    useEffect(()=>{
        ref.current.value;
    }); 
    return ref.current; 
}
//https://velog.io/@velopert/react-hooks#2-useeffect
//https://stackoverflow.com/questions/53446020/how-to-compare-oldvalues-and-newvalues-on-react-hooks-useeffect
//https://velopert.com/3638
const PhoneInfo = (props)=>{


    const {info,onRemove,onUpdate} =props; 
    const [editing,setEditing] = useState(false); 
    //const [preEditing,setPreEditing] = useState(true); 

    const [name,setName] = useState(''); 
    const [phone,setPhone] = useState(''); 
    
    //const[preName,setPreName] = useState(''); 
    //const[prePhone,setPrePhone] = useState(''); 

    const style = {
                    border: '1px solid black',
                    padding: '8px',
                    margin: '8px'
    };           

    const handleRemove =()=>{
        onRemove(info.id); 

    }

    const handleToggleEdit =()=>{
      setEditing(!editing);
        if(!editing){ 
          setName(info.name); 
          setPhone(info.phone); 
          console.log('수정버튼',editing); 
          
        }else{

          onUpdate(info.id,{name,phone}); 
          console.log('적용버튼'); 
        }

      
    }

    const handleChange01 = (e) =>{
 
        setName(e.target.value); 
              console.log(name);
    }

    const handleChange02 = (e) =>{
      setPhone(e.target.value); 
  }

   if(editing){
       
    return (
        <div style={style}>
        <div>
          <input
            value={name}
            name="name"
            placeholder="이름"
            onChange={handleChange01}
          />
        </div>
        <div>
          <input
            value={phone}
            name="phone"
            placeholder="전화번호"
            onChange={handleChange02}
          />
        </div>
        <button onClick={handleToggleEdit}>적용</button>
        <button onClick={handleRemove}>삭제</button>
      </div>
    )

   }else{
       //const {info} = props; 
    return (
        <div style={style}>
        <div><b>{info.name}</b></div>
        <div>{info.phone}</div>
        <button onClick={handleToggleEdit}>수정</button>
        <button onClick={handleRemove}>삭제</button>
      </div>
    )

   }



}


export default PhoneInfo; 