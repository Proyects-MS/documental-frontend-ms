import React, { Fragment } from 'react';
import { Media } from 'reactstrap';
import { H4 } from '../../../AbstractElements';
import { Peris } from '../../../Constant';
import { CloudDrizzleingSvg, CloudDrizzleSvg1, CloudRainMoonSvg } from '../SvgIcons';

const WeatheData = () => {
  return (
    <Fragment>
      {/* In below code Abstarct is not used due to Design Issue */}
      <li>
        <Media>
          <CloudDrizzleSvg1 />
          <Media body className="align-self-center text-white">
            <H4 attrH4={{ className: 'm-0 f-w-600 num' }}>{'25°C'}</H4>
          </Media>
          <span>{Peris}</span>
        </Media>
      </li>
      <li>
        <Media>
          <CloudRainMoonSvg />
          <Media body className="align-self-center text-white">
            <H4 attrH4={{ className: 'm-0 f-w-600 num' }}>{'95°F'}</H4>
          </Media>
          <span>{'New York'}</span>
        </Media>
      </li>
      <li>
        <Media>
          <CloudDrizzleingSvg />
          <Media body className="align-self-center text-white">
            <H4 attrH4={{ className: 'm-0 f-w-600 num' }}>{'50°C'}</H4>
          </Media>
          <span>{'India'}</span>
        </Media>
      </li>
    </Fragment>
  );
};
export default WeatheData;