import React, { Component } from 'react';
import PhoneInfo from './P004_PhoneInfo';

class PhoneInfoList extends Component {

    static defaultProps  = {
        data:[]
    }

    render(){
    
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