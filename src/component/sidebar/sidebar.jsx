import React, { useEffect, useState } from 'react';
import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import './sidebar.css'

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState('/');

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();

  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
      >
        <Menu.Item key="/librarian" icon={<AppstoreOutlined />}>
          Dashbaord
        </Menu.Item>
        <Menu.Item key="/booklist" icon={<ShopOutlined />}>
          BookList
        </Menu.Item>
        <Menu.Item key="/issue-return" icon={<ShoppingCartOutlined />}>
          Issue Return
        </Menu.Item>
        <Menu.Item key="/addstudent" icon={<UserOutlined />}>
          Add student
        </Menu.Item>
        <Menu.Item key="/due-reminder" icon={<UserOutlined />}>
          Due Reminders
        </Menu.Item>
        <Menu.Item key="/customers" icon={<UserOutlined />}>
          Log Out
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default SideMenu;
