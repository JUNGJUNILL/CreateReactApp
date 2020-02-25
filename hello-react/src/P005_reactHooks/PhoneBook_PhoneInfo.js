import React,{useState,useEffect,useRef} from 'react'
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

    }



    const handleChange01 = (e) =>{
        // const {name , value} = e.target; 
        // if(name==='name'){
          
        // }else if(name==='phone'){

        // }
        //console.log(e.target.value); 
        setName(e.target.value); 
    }

    const handleChange02 = (e) =>{
      // const {name , value} = e.target; 
      // if(name==='name'){
        
      // }else if(name==='phone'){

      // }
      //console.log(e.target.value); 
      setPhone(e.target.value); 
  }



    useEffect(()=>{
        //console.log('실행됨',editing)
   
    }); 

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