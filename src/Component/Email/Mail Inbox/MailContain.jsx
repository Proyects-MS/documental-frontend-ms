import React, { Fragment, useContext, useState } from 'react';
import { Star } from 'react-feather';
import { Link } from 'react-router-dom';
import { Card, Row, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Media, Label, Input } from 'reactstrap';
import { H6, P, Image } from '../../../AbstractElements';
import { Action } from '../../../Constant';
import EmailContext from '../../../_helper/email';

const MailContain = () => {
  const { allEmails } = useContext(EmailContext);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  var images = require.context('../../../assets/images', true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      <div className="email-right-aside">
        <Card className="email-body">
          <div className="email-profile">
            <div>
              <div className="pe-0 b-r-light"></div>
              <div className="email-top">
                <Row>
                  <div className="col-12">
                    <Media>
                      <Label className="email-chek d-block" htmlFor="chk-ani">
                        <Input className="checkbox_animated" id="chk-ani" type="checkbox" />
                      </Label>
                      <Media body>
                        <div className="dropdown">
                          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle color="primary" caret>
                              {Action}
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem className="dropdown-item">Refresh</DropdownItem>
                              <DropdownItem className="dropdown-item">Mark as important</DropdownItem>
                              <DropdownItem className="dropdown-item">Move to spam</DropdownItem>
                              <DropdownItem className="dropdown-item">Move to Trash</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </div>
                      </Media>
                    </Media>
                  </div>
                </Row>
              </div>
              <div className="inbox">
                {
                  allEmails && allEmails.map((item) => {
                    return (
                      <Media key={item.id}>
                        <div className="media-size-email">
                          <Label className="d-block mb-0" htmlFor="chk-ani">
                            <Input className="checkbox_animated" id="chk-ani" type="checkbox" />
                          </Label>
                          <Star className="like" />
                          <Image attrImage={{
                            className: 'me-3 rounded-circle'
                            , src: `${dynamicImage(item.image)}`, alt: ''
                          }} />
                        </div>
                        <Link to={{
                          pathname: `${process.env.PUBLIC_URL}/email/readmail`,
                          state: item.name
                        }}>
                          <Media body>
                            <H6>{item.name}</H6>
                            <P>{item.text}</P>
                            <span>{item.time}</span>
                          </Media>
                        </Link>
                      </Media>
                    );
                  })}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Fragment>
  );
};
export default MailContain;