import { H6, P } from '../../../../AbstractElements';
import { XYZSeller, ABCSeller, BuyingOption } from '../../../../Constant';
import React, { Fragment } from 'react';
import { Col, Card, Media, Label, Input } from 'reactstrap';

const VerticalStyles2 = () => {
  return (
    <Fragment>
      <Col sm="12">
        <P attrPara={{ className: 'mega-title mb-2' }}>{BuyingOption}</P>
      </Col>
      <Col sm="6">
        <Card className="mb-0">
          <Media className="p-20">
            <div className="radio radio-warning me-3">
              <Input id="radio26" type="radio" name="radio1" value="option1" />
              <Label for="radio26"></Label>
            </div>
            <Media body>
              <H6 attrH6={{ className: 'mt-0 mega-title-badge' }}>{XYZSeller}<span className="badge badge-warning pull-right digits">{'250 INR'}</span></H6>
              <P attrPara={{ className: 'rating-star-wrapper' }}><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning m-r-5"></i>{'5 start rating'}</P>
            </Media>
          </Media>
        </Card>
      </Col>
      <Col sm="6">
        <Card className="mb-0">
          <Media className="p-20">
            <div className="radio radio-danger me-3">
              <Input id="radio27" type="radio" name="radio1" value="option1" />
              <Label for="radio27"></Label>
            </div>
            <Media body>
              <H6 attrH6={{ className: 'mt-0 mega-title-badge' }}>{ABCSeller}<span className="badge badge-danger pull-right digits">{'150 INR'}</span></H6>
              <P attrPara={{ className: 'rating-star-wrapper' }}><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star m-r-5"></i>{'1 start rating'}</P>
            </Media>
          </Media>
        </Card>
      </Col>
    </Fragment>
  );
};
export default VerticalStyles2;