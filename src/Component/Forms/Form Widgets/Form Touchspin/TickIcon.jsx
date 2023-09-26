import React, { Fragment, useState } from 'react';
import { Check } from 'react-feather';
import { Card, CardBody, CardHeader, Col, Input, InputGroupAddon, InputGroupText } from 'reactstrap';
import { Btn, H5 } from '../../../../AbstractElements';

const TickIcon = () => {
  const [val, setVal] = useState(59);
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
            <H5 attrH5={{ className: 'card-title' }}>Touchspin With Icon</H5><span>Add icon class in <code>data-bts-postfix</code>attribute to icon to postfix as well prefix.</span>
          </CardHeader>
          <CardBody>
            <div className="input-group bootstrap-touchspin">
              <Btn attrBtn={{ color: 'primary', className: 'bootstrap-touchspin-down', onClick: Minus }}><i className="fa fa-minus"></i>
              </Btn>
              <Input className="touchspin" type="text" value={val} onChange={e => onChangeHandel(e)} />
              <InputGroupText><Check /></InputGroupText>
              <Btn attrBtn={{ color: 'primary btn-square', className: 'bootstrap-touchspin-up', onClick: Addition }}><i className="fa fa-plus"></i></Btn>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default TickIcon;