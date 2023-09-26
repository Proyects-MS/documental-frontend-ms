import React, { useContext, useState } from 'react';
import { Image } from '../../AbstractElements';
import CheckContext from '../../_helper/customizer/index';
import logo from '../../assets/images/logo/miranda.png';

const SidebarIcon = () => {
  const { toggleSidebar } = useContext(CheckContext);
  const [toggle, setToggle] = useState(false);
  const openCloseSidebar = () => {
    setToggle(!toggle);
    toggleSidebar(toggle);
  };
  return (
    <div className="logo-wrapper d-flex justify-content-center align-content-center">
      <a href="/dashboard">
        <Image attrImage={{ className: 'img-fluid for-light', src: `${logo}`, alt: '' }} styles={{width: 150, height: 150}}/>
        <Image attrImage={{ className: 'img-fluid for-dark', src: `${logo}`, alt: '' }} styles={{width: 150, height: 150}}/>
      </a>
      <div className='back-btn' onClick={() => openCloseSidebar()}><i className='fa fa-angle-left'></i></div>
    </div>
  );
};
export default SidebarIcon;