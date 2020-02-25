import React, { useState, useEffect } from 'react';
import {PhoneInfo} from 'P005_reactHooks'


const PhoneInfoList =(props)=>{

    const {data,onRemove,onUpdate} = props;
    const list = data.map((info)=>(<PhoneInfo 
                                            key={info.id} 
                                            info={info} 
                                            onRemove={onRemove}
                                            onUpdate={onUpdate}
                                            />)); 



    return(
        <div>
            {list}
        </div>

    ); 


}

export default PhoneInfoList; 