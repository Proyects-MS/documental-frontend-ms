import React, { Fragment, useContext } from 'react';
import { Col, Input } from 'reactstrap';
import { Featured, HighestPrices, LowestPrices } from '../../../Constant';
import FilterContext from '../../../_helper/ecommerce/filter';

const Sorting = () => {
  const { filterSortBy } = useContext(FilterContext);
  const filterSortFunc = (event) => {
    filterSortBy(event);
  };
  return (
    <Fragment>
      <Col md="9" sm="10" className="text-end">
        <div className="select2-drpdwn-product select-options d-inline-block"
          onChange={(e) => filterSortFunc(e.target.value)}>
          <Input className="form-control btn-square" type="select" name="select">
            <option value="Featured">{Featured}</option>
            <option value="LowestPrices">{LowestPrices}</option>
            <option value="HighestPrices">{HighestPrices}</option>
          </Input>
        </div>
      </Col>
    </Fragment >
  );
};
export default Sorting;