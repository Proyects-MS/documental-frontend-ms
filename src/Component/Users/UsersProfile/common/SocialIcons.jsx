import React, { Fragment } from 'react';
import { Heart, MessageSquare, Share } from 'react-feather';
import CountUp from 'react-countup';
import { Label } from 'reactstrap';
import { P, LI, UL } from '../../../../AbstractElements';

const SocialIcon = () => {
  return (
    <Fragment>
      <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
      <UL attrUL={{ className: 'post-comment simple-list d-flex flex-row' }}>
        <LI>
          <Label><a href="#javascript"><Heart />&nbsp;&nbsp;Like <CountUp end={50} duration={5} /></a></Label>
        </LI>
        <LI>
          <Label><a href="#javascript"><MessageSquare />&nbsp;&nbsp;Comment<CountUp end={70} duration={5} /></a></Label>
        </LI>
        <LI>
          <Label><a href="#javascript"><Share />&nbsp;&nbsp;share<CountUp end={20} duration={5} /></a></Label>
        </LI>
      </UL>
    </Fragment>
  );
};

export default SocialIcon;