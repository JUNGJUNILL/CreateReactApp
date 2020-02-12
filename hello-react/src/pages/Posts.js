import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';
import { Post } from 'pages'; 

const Posts = ({match}) => {
    console.log('matchUrl--->', match.url); 
    const style01 = {
        color: 'green',
        fontSize: '2rem'
    };
    return (

        <div>
           <h2>Post List</h2> 
           <ul>
                <li><NavLink to={`${match.url}/1`} activeStyle={style01}>Post #1</NavLink></li>
                <li><NavLink to={`${match.url}/2`} activeStyle={style01}>Post #2</NavLink></li>
                <li><NavLink to={`${match.url}/3`} activeStyle={style01}>Post #3</NavLink></li>
                <li><NavLink to={`${match.url}/4`} activeStyle={style01}>Post #4</NavLink></li>
           </ul>
           <Route exact path={match.url} render={()=>(<h3>Please select any post</h3>)}/>
                  {/*exact : 완전히 일치하는 url이 왔을 때 실행되게끔하는 라우터*/}
           <Route path={`${match.url}/:id`} component={Post}/>
        </div>
    );
};

export default Posts;