import React, { Fragment } from 'react';
import { Col, Card, CardBody, Pagination, PaginationItem, PaginationLink, CardHeader } from 'reactstrap';
import { H5 } from '../../../AbstractElements';
import { Pagi_Nations, Previous, Next } from '../../../Constant';

const PagiNations = () => {
    return (
        <Fragment>
            <Col xl="6">
                <Card>
                    <CardHeader className="pb-0">
                        <H5>{Pagi_Nations}</H5>
                    </CardHeader>
                    <CardBody>
                        <Pagination aria-label="Page navigation example" className="pagination-primary">
                            <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'1'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'2'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'3'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                        </Pagination>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default PagiNations;