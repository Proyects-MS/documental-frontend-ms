import React, { Fragment } from 'react';
import StepZilla from 'react-stepzilla';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { H5 } from '../../../../AbstractElements';
import { FormWizardWithIcon } from '../../../../Constant';
import Registration from './Registration';
import Email from './Email';
import Birthdate from './Birthdate';

const FormWizardContain = () => {
  const steps =
    [
      { name: 'Step 1', component: <Registration /> },
      { name: 'Step 2', component: <Email /> },
      { name: 'Step 3', component: <Birthdate /> },
    ];
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{FormWizardWithIcon}</H5>
              </CardHeader>
              <CardBody>
                <StepZilla
                  steps={steps}
                  showSteps={true}
                  showNavigation={true}
                  stepsNavigation={true}
                  prevBtnOnLastStep={true}
                  dontValidate={true}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default FormWizardContain;