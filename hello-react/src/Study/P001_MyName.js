import React, { Component } from 'react';

const MyName = ({match})=>{
    return(
        <div>
            안녕하세요 제 이름은 {match.params.name}입니다.
        </div>
    )
}

export default MyName; 