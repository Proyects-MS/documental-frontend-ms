import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import SalesCard from './SalesCard';
import InvoiceOverview from './InvoiceOverview';
import HotSellingProduct from './HotSellingProduct';
import OutgoingProject from '../Default/OutgoingProject';
import OurActivities from './OurActivities';
import RevenueByCategory from '../Default/RevenueByCategory';
import SupportCard from './SupportCard';
import TotalSales from './TotalSales';
import Sliders from './Slider';

const EcommerceContain = () => {
  return (
    <Fragment>
      <Container fluid={true} className="ecommerce-dash">
        <Row>
          <SalesCard />
          <InvoiceOverview />
          <HotSellingProduct />
          <OutgoingProject />
          <OurActivities />
          <RevenueByCategory />
          <Sliders />
          <SupportCard />
          <TotalSales />
        </Row>
      </Container>
    </Fragment>
  );
};
export default EcommerceContain;