import React, { Component } from 'react';
import PhoneInfo from './P004_PhoneInfo';

class PhoneInfoList extends Component {

    static defaultProps  = {
        data:[]
    }

    render(){
    
        const {data} = this.props;
        console.log('data--->', data); 
        const list = data.map(
            (info)=>{ return<PhoneInfo key={info.id} info={info}/>}
        );

            return(
                <div>
                    {list}
                </div>
            )
    }



}


export default PhoneInfoList;