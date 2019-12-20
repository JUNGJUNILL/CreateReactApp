import React, { Component } from 'react';
import PhoneInfo from './P002_PhoneInfo';

class PhoneInfoList extends Component {

    static defaultProps  = {
        data:[]
    }

    shouldComponentUpdate(nextProps,nextState){
        nextProps.data.map((v)=> console.log('nextProps.data',v.name)) 
        this.props.data.map((v)=> console.log('this.props',v.name)) 
        
        return nextProps.data !== this.props.data; 
        //return 값이 false이면 render 안함 
        //return 값이 true 이면 render 함 
    }

    render(){
        console.log('PhoneInfoList'); 
        const {data,onRemove,onUpdate} = this.props;
        const list = data.map(
            (info)=>{ return<PhoneInfo 
                            key={info.id} 
                            info={info}
                            onRemove={onRemove}
                            onUpdate={onUpdate}
                            />}
        );

            return(
                <div>
                    {list}
                </div>
            )
    }



}


export default PhoneInfoList;