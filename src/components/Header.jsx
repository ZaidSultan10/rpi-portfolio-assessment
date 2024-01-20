import React from 'react'
import { Menu, Icon } from 'antd';
import {  Link, useLocation } from 'react-router-dom';

const Header = () => {
    let userData = localStorage.getItem('userData') && JSON.parse(localStorage.getItem('userData'))?.userData

  return (
    <section>
        <Menu mode="horizontal">
            <Menu.Item key="mail">
                <a href={userData && userData.navigation ? userData.navigation : '/'}>Home</a>
            </Menu.Item>
            <Menu.Item key="alipay">
                <a href="/login">{userData && userData.username ? `Welcome ${userData.username} (Logout)` : `Login`}</a>
            </Menu.Item>
        </Menu>
    </section>
  )
}

export default Header