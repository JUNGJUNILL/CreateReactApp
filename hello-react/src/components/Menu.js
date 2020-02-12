import React from 'react';
import { Badge } from 'reactstrap';
import { Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom';//설정한 URL 이 활성화가 되면, 특정 스타일 혹은 클래스를 지정 할 수 있습니다.

const Menu = () => {
    const style01 = {
        color: 'green',
        fontSize: '2rem'
    };
    return (
        <div>
            <Badge href="/reactStrapeAlerts" color="primary">01.Alert</Badge>
            <Badge href="/reactStrapeButton" color="primary">02.button</Badge>
            <Badge href="/reactStrapeBreadcrumb01" color="primary">03.Breadcrumb</Badge>
            <Badge href="/reactStrapeButtonDropDown" color="primary">04.ButtonDropDown</Badge>
            <Badge href="/reactStrapeFade" color="primary">05.Fade</Badge>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><NavLink to="/about/good" activeStyle={style01}>About good</NavLink></li>
                <li><NavLink to="/posts" activeStyle={style01}>Posts</NavLink></li>
                <li><NavLink to="/myname/정준일" activeStyle={style01}>P001_MyName</NavLink></li>
                <li><NavLink to="/counter" activeStyle={style01}>P002_Counter</NavLink></li>
                <li><NavLink to="/phonebook" activeStyle={style01}>P002_PhoneBookComponent</NavLink></li>
                <li><NavLink to="/todoListtmplate" activeStyle={style01}>P003_TodoListComponent</NavLink></li>
                <li><NavLink to="/reactStrapeAlerts" activeStyle={style01}>P004_reactStrap</NavLink></li>
                <li><NavLink to="/reactHooks" activeStyle={style01}>P005_reactHooks</NavLink></li>
            </ul>
            <hr/>
        </div>       
    );
};

export default Menu;