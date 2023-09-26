import { Breadcrumbs, H5, H6, Spinner } from '../../../AbstractElements';
import { Data } from './SpinnerData';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import React, { Fragment } from 'react';
import { LoaderStyle } from '../../../Constant';

const Spinners = (props) => {

  return (
    <Fragment>
      <Breadcrumbs parent="Ui Kits" title="Spinners" />
      <Container fluid={true}>
        <Row>
          <Col sn="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{LoaderStyle}</H5>
              </CardHeader>
              <CardBody>
                <Row>
                  {/* This is just for reference so you cant take it as example of how to use  it */}
                  <Col md="3" sm="6">
                    <H6 attrH6={{ className: 'sub-title mb-0 text-center' }}>{'Loader 1'}</H6>
                    <div className="loader-box">
                      <Spinner attrSpinner={{ className: 'loader-1' }} />
                    </div>
                  </Col>
                  {/* As there is so many examples, so for repeated code we called it inside loop so we can utilize our code */}
                  {Data.map((spinner, i) =>
                    <Col md="3" sm="6" key={i}>
                      <H6 attrH6={{ className: 'sub-title mb-0 text-center' }}>{spinner.heading}</H6>
                      <div className="loader-box">
                        <Spinner attrSpinner={{ className: spinner.spinnerClass }} />
                      </div>
                    </Col>
                  )}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Spinners;