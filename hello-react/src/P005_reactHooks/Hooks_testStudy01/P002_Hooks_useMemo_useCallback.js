//useMemo를 사용하면 함수형 컴포넌트 내부에서 발생하는 연산을 최적화 할 수 있다. 
/*
        참고로 다음 두 코드는 완벽히 똑같은 코드입니다.

        useCallback(() => {
        console.log('hello world!');
        }, [])

        useMemo(() => {
        const fn = () => {
            console.log('hello world!');
        };
        return fn;
        }, [])
*/

import React, {useState, useMemo, useCallback,useRef ,current} from 'react'


const getAverage = (numbers) =>{

    console.log('평균값 계산 중...'); 
    if(numbers.length === 0) return 0; 
    const sum = numbers.reduce((a,b)=>a+b); 
    return sum / numbers.length; 

}

const P004_Hooks04_useMemo = ()=>{

    const [list,setList] = useState([]); 
    const [number,setNumber] = useState(''); 
    const inputEl = useRef();
    // ref관련 자료 https://velopert.com/1148
    // useRef를 사용하하여 ref(react에서 직접 돔으로 접근할 때)
    // 를 설정하면, useRef 를 통해 만든 객체 안의 current 값이 실제 엘리먼트를 가르키게 됩니다. 

    //onChange, onInsert라는 함수를 선언해주었다. 
    //이렇게 선선을 하게 되면 컴포넌트가 리렌더링 될 때마다 이 함수들이
    //새로 생성된다. 대부분의 경우에는 이러한 방식이 문제가 되지 않지만, 
    //컴포넌트의 렌더링이 자주 발생하거나, 렌더링 해야 할 컴포넌트의 개수가 많아진다면, 
    //이 부분을 최적화 해주는것이 좋다. 
    const onChange = useCallback((e) =>{
        console.log('onChange'); 
        setNumber(e.target.value); 
    },[]); //
    // ▲빈 배열을 넣었을 경우, 처음 마운트 되었을 때만 함수 생성됨  


    //함수 내부에서 기존의 상태 값을 의존해야 할 때는 꼭 두번째 파라미터 안에 포함을 시켜주어야 합니다. 
    //예를 들어서 onChange 의 경우엔 기존의 값을 조회하는 일은 없고 바로 설정만 하기 때문에 
    //배열이 비어있어도 상관이 없지만 onInsert 는 기존의 number 와 list 를 조회해서 nextList 를 생성하기 때문에 
    //배열 안에 number 와 list 를 꼭 넣어주어야 합니다.
    const onInsert = useCallback((e) =>{
        console.log('onInsert'); 
        const nextList = list.concat(parseInt(number)); 
        setList(nextList); 
        setNumber(''); 
        inputEl.current.focus();
    },[number,list]); 
    //  ▲number , list가 바뀔 때마다 함수 생성 
    

    //useMemo를 사용하기 전에는, 숫자를 등록할 때뿐만 아니라 인풋 내용이 수정 될 때도 
    //우리가 만든 getAverage함수가 호출됨을 알 수 있다. 인풋 내용이 바뀔 땐 평균 값을 
    //다시 계산 할 필요가 없는데, 이렇게 렌더링 할 때마다 자원이 낭비가 된다. 

    //렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고, 만약에 원하는 값이 바뀐 것이 아니라면
    //이전에 연산했던 결과를 다시 사용하는 방식이다.

     const avg =useMemo(()=>getAverage(list),[list]); 
    //                                         ▲   
    //              이렇게 설정을 해 놓으면 두번째 파라메터(list) 내용이 바뀔 때만 getAverage함수가 실행된다. 

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <ul>    
                {list.map((value,index) => (
                <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                {/*<b>평균 값:</b>{getAverage(list)}*/}
                <b>평균 값:</b>{avg}
            </div>
        </div>

    ); 

}

export default P004_Hooks04_useMemo