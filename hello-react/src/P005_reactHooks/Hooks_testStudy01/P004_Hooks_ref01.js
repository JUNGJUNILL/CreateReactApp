import React, { Component,useRef,createRef } from 'react';
import ChildComponent from './ChildComponent'; 


const TextInputWithFocusButton = () =>{

    // const inputEl = createRef(); 

    // const onClickBtn = () =>{
    //     inputEl.current 
    // }

  
    // return (
    //     <>

    //         <button onClick={inputEl.current()}>부모컴포넌트버튼</button>
    //         <ChildComponent ref={inputEl}/>
    //     </>
    // )

    const ref = createRef(); 
    const aaa = ref.current(); 

    return(
        <>
        <button onClick={aaa}>부모 컴포넌트</button>
    <ChildComponent ref={ref} />

        </>
    )

}

export default TextInputWithFocusButton; 