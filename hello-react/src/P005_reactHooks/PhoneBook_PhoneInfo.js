import React,{useState,useEffect} from 'react'



export const usePreviousProps = (value) =>{

    const ref = useRef(); 
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
    
    const style = {
                    border: '1px solid black',
                    padding: '8px',
                    margin: '8px'
    };           

    const preveProps = usePreviousProps({info}); 
    useEffect(()=>{
        if(preveProps.info.name !== info.name){
            console.log('달라'); 
        }
    },[info]); 


    const handleRemove =()=>{
        onRemove(info.id); 

    }

    const handleToggleEdit =()=>{

        setEditing(!editing); 

    }

    const handleChange = (e) =>{
     
    }


   if(editing){

    return (
        <div style={style}>
        <div>
          <input
            value={info.name}
            name="name"
            placeholder="이름"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            value={info.phone}
            name="phone"
            placeholder="전화번호"
            onChange={handleChange}
          />
        </div>
        <button onClick={handleToggleEdit}>적용</button>
        <button onClick={handleRemove}>삭제</button>
      </div>
    )

   }else{

    return (
        <div style={style}>
        <div><b>{name}</b></div>
        <div>{phone}</div>
        <button onClick={handleToggleEdit}>수정</button>
        <button onClick={handleRemove}>삭제</button>
      </div>
    )

   }



}


export default PhoneInfo; 