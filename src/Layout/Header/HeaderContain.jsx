import React, { Fragment, useEffect, useState } from 'react';
import { FileText, LogIn, Mail, Settings, User } from 'react-feather';
import { Media } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { H6, Image, LI, UL } from '../../AbstractElements';
import UserImg from '../../assets/images/avtar/chat-user-2.png';
import ItemCart from './ItemCart';
import MaxMiniSize from './MaxMiniSize';
import MoonLight from './MoonLight';
import Notification from './Notification';
import Language from './Langauge';
import { firebase_app } from '../../Config/Config';
import Bookmark from './Bookmark/index';
import { Account, Inbox, LogOut, Taskboard } from '../../Constant';

const HeaderContain = () => {

  const [profile, setProfile] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    setProfile(localStorage.getItem('profileURL'));
    setName(localStorage.getItem('Name'));
  }, []);

  const history = useNavigate();

  const Logout = () => {
    localStorage.clear()
    history(`/login`);
  };

  return (
    <Fragment>
      <div className="nav-right col-10 col-sm-6 pull-right right-header p-0 dash-76">
        <UL attrUL={{ className: `simple-list flex-row nav-menus` }}>
          <MoonLight />
          <MaxMiniSize />
          <LI attrLI={{ className: 'profile-nav onhover-dropdown pe-0 pt-0 me-0' }} >
            <Media className="profile-media">
              <Image styles={{width: '30px', height: '30px'}} attrImage={{className: 'rounded-circle', src: profile !== null ? profile : UserImg, alt: ''}}/>
              <Media body>
                <span>{name}</span>
              </Media>
            </Media>
            <UL attrUL={{ className: `simple-list profile-dropdown onhover-show-div` }}>
              <LI><Link to={`${process.env.PUBLIC_URL}/usuario/perfil`}><i><User /></i><span>Perfil</span></Link></LI>
              <LI attrLI={{ onClick: Logout }}>
                <Link to={`${process.env.PUBLIC_URL}/login`}>
                  <LogIn /><span>Salir</span>
                </Link>
              </LI>
            </UL>
          </LI>
        </UL>
      </div >
    </Fragment >
  );
};
export default HeaderContain;


