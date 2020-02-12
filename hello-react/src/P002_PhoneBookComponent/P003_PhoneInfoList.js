import React, { Component } from 'react';
import PhoneInfo from './P002_PhoneInfo';

class PhoneInfoList extends Component {

    static defaultProps ={
        data : [],
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate not defined'),
    }

    //갱신이 일어나면 실행된다. 
    //default true반환 
    //false render() X , true render() O
    //nextProps(전 컴포넌트의 props 데이터)
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        console.log(nextProps.data, " : ", this.props.data);
        return nextProps.data !== this.props.data;
      }

    render(){

        const {data,onRemove,onUpdate} = this.props; 
        const list = data.map(
            info=>(<PhoneInfo key={info.id} 
                              info={info} 
                              onRemove={onRemove}
                              onUpdate={onUpdate}
                 />)
        ); 

        return (
            <div>
                {list}
            </div>
        )
    }



}


export default PhoneInfoList;