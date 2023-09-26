import React, { Fragment, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Card, CardBody, Col } from 'reactstrap';

const GeneralCalendar = () => {
  // eslint-disable-next-line
  const [date, setDate] = useState({ date: new Date() });
  // eslint-disable-next-line
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = date => {
    setDate(date);
  };
  return (
    <Fragment>
      <Col xl='3' md='6' className=' xl-50 box-col-6'>
        <Card>
          <CardBody className="cal-date-widget">
            <div className="cal-datepicker">
              <div className="datepicker-here float-sm-end" data-language="en">
                <DatePicker
                  selected={startDate}
                  onChange={handleChange}
                  inline
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default GeneralCalendar;