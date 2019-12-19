import React, { Component } from 'react';
import PhoneInfo from './P004_PhoneInfo';

class PhoneInfoList extends Component {

    static defaultProps  = {
        data:[]
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("nextProps.data:",nextProps.data,":","this.props.data:",this.props.data); 
        return nextProps.data !== this.props.data; 
        //return 값이 false이면 render 안함 
        //return 값이 true 이면 render 함 
    }

    render(){
        console.log('PhoneInfoList'); 
        const {data,onRemove,onUpdate} = this.props;
        console.log('PhoneInfoList.js/data--->', data); 
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