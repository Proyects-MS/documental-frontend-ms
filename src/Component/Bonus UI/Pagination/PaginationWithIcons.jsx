import React from 'react';
import { Col, Card, CardBody, Pagination, PaginationItem, PaginationLink, CardHeader } from 'reactstrap';
import { H5 } from '../../../AbstractElements';
import { PaginationWithIcons, Previous, Next } from '../../../Constant';

const PaginationWithIconsClass = () => {
    return (
        <Col xl="6">
            <Card>
                <CardHeader className="pb-0">
                    <H5>{PaginationWithIcons}</H5>
                </CardHeader>
                <CardBody>
                    <Pagination aria-label="Page navigation example" className="pagination-primary" >
                        <PaginationItem><PaginationLink href="#javascript"><span aria-hidden="true">«</span><span className="sr-only">{Previous}</span></PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{'1'}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{'2'}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{'3'}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript"><span aria-hidden="true">»</span><span className="sr-only">{Next}</span></PaginationLink></PaginationItem>
                    </Pagination>
                </CardBody>
            </Card>
        </Col>
    );
};

export default PaginationWithIconsClass;