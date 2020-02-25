import React, { useState } from 'react';
import { Link, Route, NavLink } from 'react-router-dom';
import 
    {Hooks01,
     Hooks02,
     Hooks03,
     VisibleBtn,
     ExUseMemo,
     Test
     } 
from 'P005_reactHooks';

const HooksList = ({match}) => {
  console.log(match.url); 
  const style01 = {
    color: 'green',
    fontSize: '2rem'
};

const test  = (a) =>{
  console.log(a); 
}

return (

  <div>
     <h2>Hooks List</h2> 
    <ul>
          <li><NavLink to={`${match.url}/1`} activeStyle={style01}>hooks#1</NavLink></li>
          <li><NavLink to={`${match.url}/2`} activeStyle={style01}>hooks#2</NavLink></li>
          <li><NavLink to={`${match.url}/3`} activeStyle={style01}>hooks#3</NavLink></li>
          <li><NavLink to={`${match.url}/4`} activeStyle={style01}>hooks#4</NavLink></li>
          <li><NavLink to={`${match.url}/5`} activeStyle={style01}>hooks#5</NavLink></li>
     </ul>
      
     <Route exact path={match.url} render={()=>(<h3>Please select any post</h3>)}/>
     
     <Route exact path={`${match.url}/1`} render={()=>(
       <div>
         <Hooks01 />
       </div>
      )}/>

    <Route exact path={`${match.url}/2`} render={()=>(

       <div>
         <VisibleBtn />
       </div>
      )}/>


    <Route exact path={`${match.url}/3`} render={()=>(

    <div>
      <Hooks03 />
    </div>
    )}/>

    
<Route exact path={`${match.url}/4`} render={()=>(

<div>
  <ExUseMemo />
</div>
)}/>

<Route exact path={`${match.url}/5`} render={()=>(

<div>
  <Test />
</div>
)}/>



     
     {/* <Route path={`${match.url}/:id`} component={Hooks01}/> */}

    
  </div>
);
};

export default HooksList;