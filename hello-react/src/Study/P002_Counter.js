import React, { Component } from 'react';

//Counter의 자식 컴포넌트
const Problematic = () => {
    throw (new Error('버그가 나타났다!'));
    return (
      <div>
        
      </div>
    );
  };

class Counter extends Component{


    state = {
        number: 0
      }
      
  constructor(props) {
    //컴포넌트 생성자 함수, 컴포넌트가 새로 만들어질 때마다 이 함수가 호출됩니다.
    super(props);
    console.log('constructor');
  }
  
  
  componentWillMount() {
    //deprecated

    console.log('componentWillMount (deprecated)');
  }

  componentDidMount() {
      //여러분의 컴포넌트가 화면에 나타나게 됐을 때 호출됩니다.
      // 외부 라이브러리 연동을 하거나, 해당 컴포넌트에서 필요로하는 데이터를 요청하기 위해 
      //axios, fetch 등을 통하여 ajax 요청을 하거나, DOM 의 속성을 읽거나 
      //직접 변경하는 작업을 진행합니다.
      
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    //false render() X , true render()  O 

    //쓸대없이 낭비되고 있는 이 CPU 처리량을 줄여주기 위해서 
    //우리는 Virtual DOM 에 리렌더링 하는것도,
    //불필요할경우엔 방지하기 위해서 shouldComponentUpdate 를 작성합니다.
    
    // 5 의 배수라면 리렌더링 하지 않음
    console.log('shouldComponentUpdate',nextState);
    if (nextState.number % 5 === 0) {
       console.log('nextState.number % 5 === 0 == true');
        return false;
    
    }
    return true;
  }
/*
  componentWillUpdate(nextProps, nextState) {
    //shouldComponentUpdate return 값이 false이면 
    //이 API를 실행되지 않는다.
    //이 API도 16.3v 이후 deprecate된다. 
    console.log('componentWillUpdate');
  }
*/  
getSnapshotBeforeUpdate(prevProps, prevState) {
//componentWillUpdate() 대체 API
//DOM 변화가 일어나기 직전의 DOM 상태를 가져오고
//여기서 return 값은 componentDidUpdate 3번째 파라메터로 
//받아 온다. 
return 'hello'
}

componentDidUpdate(prevProps, prevState, snapshot) {
//컴포넌트 자신의 render 함수에서 에러가 발생해버리는 것은 잡아낼 수는 없지만
//그 대신에 자식 컴포넌트 내부에서 발생하는 에러들을 잡아낼 수 있다. 
    console.log('snapshot==>' , snapshot);
    console.log('componentDidUpdate');
}



componentDidCatch(error, info) {
    this.setState({
      error: true
    });
  }
  


    
     
      handleIncrease = () => {
        const {number} =this.state;
        this.setState({
            number:number+1
        })
      }
    
      handleDecrease = () => {
        const {number} =this.state;
        this.setState({
            number:number-1
        })
      }
    
      render() {
        if (this.state.error) return (<h1>에러발생!</h1>);
        return (
          <div>
            <h1>카운터</h1>
            <div>값: {this.state.number}</div>
            { this.state.number === 4 && <Problematic /> }
            <button onClick={this.handleIncrease}>+</button>
            <button onClick={this.handleDecrease}>-</button>
          </div>
        );
      }

}


export default Counter;