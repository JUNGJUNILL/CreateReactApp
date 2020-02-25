import React, { useState, useEffect } from 'react';

//useEffect()
//첫 마운트 때는 실행되지 않는다. 
//두번째 파라메터에 빈 배열을 넣으면 언마운트 될 때만 실행됩니다. 

//리엑트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hooks이다. 
//https://velog.io/@velopert/react-hooks#2-useeffect
const  Info =()=> {

    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [preName,setPreName] =  useState('');

    useEffect(()=>{
        console.log('렌더링이 완료되었습니다.'); 
        console.log({name,nickname});

        return () =>{
        //뒷정리하기
        //useEffect는 기본적으로 렌더링 되고난 직후마다 실행되며, 
        //두번째 파라메터 배열에 무엇을 넣는냐에 따라 실행되는 조건이 달라진다. 
        //만약 컴포넌트가 언마운트 전이나, 업데이트 되기 직전에 어떠한 작업을 수행하고 싶다면 
        //uesEffect에서 뒷정리 함수를 반환해 주어야 합니다. 
            console.log('cleanUp'); 
            console.log('뒷정리',name); //업데이트 되기 직전값을 가져올 수 있다. 
        }


    })




    const onChangeName = e => {
        setName(e.target.value);
      };
    
      const onChangeNickname = e => {
        setNickname(e.target.value);
      };


    return (
<div>
        <input type="text" onChange={onChangeName} value={name} />
        <input type="text" onChange={onChangeNickname} value={nickname} />
        이름 : {name}
        닉네임 : {nickname}
</div>

    )


}

export default Info; 