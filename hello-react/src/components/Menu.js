import React from 'react';
import { Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom';//설정한 URL 이 활성화가 되면, 특정 스타일 혹은 클래스를 지정 할 수 있습니다.

const Menu = () => {
    const style01 = {
        color: 'green',
        fontSize: '2rem'
    };
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><NavLink to="/about/good" activeStyle={style01}>About good</NavLink></li>
                <li><NavLink to="/posts" activeStyle={style01}>Posts</NavLink></li>
                <li><NavLink to="/myname/정준일" activeStyle={style01}>P001_MyName</NavLink></li>
                <li><NavLink to="/counter" activeStyle={style01}>P002_Counter</NavLink></li>
                <li><NavLink to="/phonebook" activeStyle={style01}>P002_PhoneBookComponent</NavLink></li>
                <li><NavLink to="/todoListtmplate" activeStyle={style01}>P003_TodoListComponent</NavLink></li>
                
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;