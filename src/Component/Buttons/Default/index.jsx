import React, { Fragment } from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import { Btn, H5 } from '../../../AbstractElements';
import { DefaultButtonData } from '../../../Data/Buttons/index';

const DefaultButtonContain = () => {
  return (
    <Fragment>
      <Col sm="12">
        {DefaultButtonData.map((item, i) =>
          <Card id={item.cardId && item.cardId} key={i}>
            <CardHeader className='pb-0'>
              <H5>{item.title}</H5>
              <span>{item.span} {item.code && <code>{item.code}</code>}{item.detail && item.detail}
                {item.code1 && <code>{item.code1}</code>} {item.detail1 && item.detail1} </span>
            </CardHeader>
            <CardBody>
              <div className="btn-showcase">
                {
                  item.btnSub.map((btnItem, i) =>
                    <Btn attrBtn={{
                      color: btnItem.colorClass, size: btnItem.size && btnItem.size,
                      active: btnItem.active && true,
                      disabled: btnItem.disabled && true,
                      outline: btnItem.outline && true
                    }} key={i}
                    >
                      {btnItem.title}
                    </Btn>
                  )
                }
              </div>
            </CardBody>
          </Card>
        )}
      </Col>
    </Fragment>
  );
};

export default DefaultButtonContain;