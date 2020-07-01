import React, { Component,createRef } from 'react';

//부모 컴포넌트에서 자석 컴포넌트를 실행하는 방법 
//Class 버전 




class RefCompoenet extends React.Component{

    constructor(props){
        super(props);
        this.parentBtn = this.parentBtn.bind(this); 
      }

      parentBtn(){
          this._child.childrenBtn(); 
      }

    render(){

        return(
            <>
            <div>헬로우</div>
            <button onClick={this.parentBtn}>눌러봐</button>
            <div><ChildComponent ref={(val)=>{this._child = val}}/></div> 
            </>
        )
    }
}


class ChildComponent extends React.Component{

    constructor(props){
        super(props);
        this.childrenBtn = this.childrenBtn.bind(this);
      };

    childrenBtn(){

        alert('자식 컴포넌트');
    }

    render(){
        return(
            <div>자식입니다.</div>
        )
    }

}

export default RefCompoenet; 