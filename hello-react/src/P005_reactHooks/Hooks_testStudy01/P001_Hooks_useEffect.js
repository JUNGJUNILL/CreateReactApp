import React,{useState,useEffect} from 'react'

//useEffect()
//리엑트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hooks이다. 
//두번째 파라메터에 빈 배열을 넣어주면 첫 마운트 때만 실행된다. 
//특정 값이 업데이트 될 때만 실행시키리면 해당 요소를 배열에 넣으면 된다. 

//https://velog.io/@velopert/react-hooks#2-useeffect
const Info = ()=>{

    const [name,setName] =useState(''); 
    const [nickName,setNickName] = useState(''); 

    useEffect(()=>{
        console.log('첫 마운트'); 
      //  console.log({name,nickName}); 


        //뒷정리 함수 
        //01.컴포넌트 언마운트 전이나, 업데이트 되기 직전에 어떠한 작업을 수행하고 싶다면 뒷정리 함수를 반환해 줘야 한다.
        //02.오직 언마운트 될 때만 뒷정리 함수를 호출하고 싶다면 useEffect 빈 배열([])을 넣어주면 된다. 
        //03.뒷정리 함수가 호출될 때에는 업데이트 되기 직전의 값을 보여준다.
        return()=>{
            console.log('clean Up'); 
            console.log('state ' , name); 
        }
    },[name])


    const onChangeName = (e)=>{
        setName(e.target.value);
    }

    const onChangeNickname = (e)=>{
        setNickName(e.target.value);
    }


    return (
        <div>
          <div>
            <input value={name} onChange={onChangeName} />
            <input value={nickName} onChange={onChangeNickname} />
          </div>
          <div>
            <div>
              <b>이름:</b> {name}
            </div>
            <div>
              <b>닉네임: </b>
              {nickName}
            </div>
          </div>
        </div>
      );
}

export default Info; 