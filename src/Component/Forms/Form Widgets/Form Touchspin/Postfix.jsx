import React, { Fragment, useState } from 'react';
import { Card, CardBody, CardHeader, Col, Input, InputGroup, InputGroupText } from 'reactstrap';
import { Btn, H5 } from '../../../../AbstractElements';

const Postfix = () => {
  const [val, setVal] = useState(30);
  const onChangeHandel = (event) => {
    setVal(event.target.value);
  };
  const Minus = () => {
    setVal(val - 1);
  };
  const Addition = () => {
    setVal(val + 1);
  };
  return (
    <Fragment>
      <Col sm="12" md="6">
        <Card>
          <CardHeader className="pb-0">
            <H5 attrH5={{ className: 'card-title' }}>Touchspin with Postfix</H5><span>Add <code>.data-bts-postfix="POSTFIX_VALUE"</code> attribute to input to add postfix to touchspin input
              group.</span>
          </CardHeader>
          <CardBody>
            <InputGroup className="input-group bootstrap-touchspin">
              <Btn attrBtn={{ color: 'primary', className: 'bootstrap-touchspin-down', onClick: Minus }}><i className="fa fa-minus"></i>
              </Btn>
              <Input className="touchspin" type="text" value={val} onChange={e => onChangeHandel(e)} />
              <InputGroupText>%</InputGroupText>
              <Btn attrBtn={{ color: 'primary btn-square', className: 'bootstrap-touchspin-up', onClick: Addition }}><i className="fa fa-plus"></i></Btn>
            </InputGroup>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default Postfix;