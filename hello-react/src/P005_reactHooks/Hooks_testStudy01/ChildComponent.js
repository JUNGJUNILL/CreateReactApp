import React, { Component,useRef,forwardRef,useImperativeHandle } from 'react';

const ChildComponent = forwardRef((props,ref) =>{


    const handle = ()=>{
        alert('ghgg'); 
    }

    useImperativeHandle(ref,()=>({
        handle,

    })); 

    return <View />
        


})

export default ChildComponent; 