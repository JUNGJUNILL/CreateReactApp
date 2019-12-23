import React, { Component } from 'react';


const Palette=({colors, selected, onSelect})=>{

           const array= colors.map((v)=>v); 

        return(
            <div>
                 {array}
            </div>
        );

}

export default Palette; 