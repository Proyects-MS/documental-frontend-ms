import React from 'react';
import { CardBody, Form, FormGroup, Input, InputGroup, Label } from 'reactstrap';
import { Amount, BTC, BuyNow, Total, TUSD, USD } from '../../../Constant';
import { ArrowSvg } from '../SvgIcons';

const BuyForm = () => {
    return (
        <CardBody className="pt-0">
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div className="buy-sell-form">
                        <Form>
                            <FormGroup className="form-group">
                                <div className="small-group">
                                    <Label> {Amount}</Label>
                                    <InputGroup >
                                        <Input className="form-control" type="text" placeholder="7,904.65" /><span className="input-group-text bg-transparent">{USD}</span>
                                    </InputGroup>
                                </div>
                                <div className="small-group">
                                    <div className="convert-img text-center">
                                        <ArrowSvg />
                                    </div>
                                </div>
                                <div className="small-group">
                                    <InputGroup>
                                        <Input className="form-control" type="text" placeholder="30" /><span className="input-group-text bg-transparent">{BTC}</span>
                                    </InputGroup>
                                </div>
                            </FormGroup>
                            <FormGroup className="d-block mb-0 form-group">
                                <Label> {Total}   </Label>
                                <InputGroup>
                                    <Input className="form-control" type="text" placeholder="58794,53" /><span className="input-group-text bg-transparent">{TUSD}</span>
                                </InputGroup>
                            </FormGroup>
                            <div className="mb-0 form-group">
                                <div className="btn btn-primary d-block w-100 text-center"> {BuyNow}</div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </CardBody >
    );
};
export default BuyForm;