import React from 'react';
import { Col, Card, CardBody, Pagination, PaginationItem, PaginationLink, CardHeader } from 'reactstrap';
import { H5 } from '../../../AbstractElements';
import { PaginationAlignment, Previous, Next } from '../../../Constant';

const PaginationAlignmentClass = () => {
    return (
        <Col xl="12">
            <Card>
                <CardHeader className="pb-0">
                    <H5>{PaginationAlignment}</H5>
                </CardHeader>
                <CardBody>
                    <nav className="m-b-30" aria-label="Page navigation example">
                        <Pagination className="pagination pagination-primary" aria-label="Page navigation example">
                            <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'1'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'2'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'3'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                        </Pagination>
                    </nav>
                    <nav className="m-b-30" aria-label="Page navigation example">
                        <Pagination className="pagination justify-content-center pagination-primary" aria-label="Page navigation example">
                            <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'1'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'2'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'3'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                        </Pagination>
                    </nav>
                    <nav aria-label="Page navigation example">
                        <Pagination className="pagination justify-content-end pagination-primary" aria-label="Page navigation example">
                            <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'1'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'2'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'3'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                        </Pagination>
                    </nav>
                </CardBody>
            </Card>
        </Col>
    );
};

export default PaginationAlignmentClass;