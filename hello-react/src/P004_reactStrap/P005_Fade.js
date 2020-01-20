import React, { useState } from 'react';
import {Button,Fade} from 'reactstrap'; 


const FaDe = (props) =>{

    const [fadeIn,setFadeIn] = useState(true); 
                                        //true fade in 
                                        //false fade out 
    const toggle = ()=> setFadeIn(!fadeIn); 

    return (

        <div>
            <Button color="primary" onClick={toggle}>Toggle Fade</Button>
            <Fade in={fadeIn}tag="h1" >
            This content will fade in and out as the button is pressed
            </Fade>
        </div>

    );





}

export default  FaDe; 