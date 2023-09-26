import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import CashonDelivery from './Cod';
import CreditCards from './CreditCard';
import DebitCards from './DebitCard';
import EMIs from './Emi';
import NetBankings from './NetBanking';

const PaymentDetailContain = () => {
  return (
    <Fragment>
      <Container fluid={true} className="credit-card payment-details">
        <Row>
          <CreditCards />
          <DebitCards />
          <CashonDelivery />
          <EMIs />
          <NetBankings />
        </Row>
      </Container>
    </Fragment>
  );
};
export default PaymentDetailContain;