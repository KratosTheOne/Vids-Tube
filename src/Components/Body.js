import React from 'react'
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar'

const Body = () => {
  return (
    <div className="flex">
        <SideBar />
        <Outlet />
    </div>
  );
};

export default Body;

//Rather than importing MainContainer and WatchPage belowe Sidebar we are importing Outlet as Body has childrens- MainContainer and WatchPage.