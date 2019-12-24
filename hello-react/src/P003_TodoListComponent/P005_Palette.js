import React, { Component } from 'react';
import './Palette.css'; 
//하나의 js파일에서 hooks를 이용하여 그 안에서 컴포넌트로 사용할 수 있음을
//알게되었다. 


const Color = ({color,active,onClick})=>{

  return(  <div className={`color ${active? 'active':''}`} style={{background:color}} onClick={onClick}>
           </div>
        )
}


const Palette=({colors, selected, onSelect})=>{

            const colorList = colors.map(
                (color)=>
                   (<Color 
                        color={color} 
                        active={selected===color} 
                        onClick={()=> onSelect(color)} 
                        key={color} />)
                )

        return(
            <div className="palette">
                 {colorList}
            </div>
        );

}

export default Palette; 