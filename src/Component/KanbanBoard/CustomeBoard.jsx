import React, { Fragment } from 'react';
import Board from '@asseinfo/react-kanban';
import { Card, CardHeader, CardBody, Media } from 'reactstrap';
import { H5, H6, LI, P, UL, Image } from '../../AbstractElements';
import { CustomBoards } from '../../Constant';
import { customDefaultData } from '../../Data/mock-table/apiboard';

const CustomeBoard = () => {
  const customboard = customDefaultData;
  var images = require.context('../../assets/images', true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      {customboard &&
        <Card>
          <CardHeader className="pb-0">
            <H5>{CustomBoards}</H5>
            <P attrPara={{ className: 'mb-0' }}>| colors, gutter, click on board&apos;s item and restricting which boards to drag items to</P>
          </CardHeader>
          <CardBody>
            <div className="kanban-container">
              <main className="kanban-drag">
                <Board initialBoard={customboard}
                  renderCard={({ title, date, priority, img, company, rate, customer_img1, customer_img2, customer_img3, bg_color, id }) => (
                    <div className="kanban-item" key={id}>
                      <a className={`kanban-box ${bg_color}`} href="#javascript">
                        <span className="date">{date}</span>
                        <span className={`badge ${priority === 'Low' ? 'badge-success' : 'badge-primary'} f-right`}>{priority}</span>
                        <H6>{title}</H6>
                        <Media><Image attrImage={{
                          className: 'img-20 me-1 rounded-circle', src:
                            `${dynamicImage(img)}`, alt: ''
                        }} />
                          <Media body><P>{company}</P></Media>
                        </Media>
                        <div className="d-flex mt-3">
                          <UL attrUL={{ className: 'simple-list list flex-row' }}>
                            <LI><i className="fa fa-comments-o"></i>{'2'}</LI>
                            <LI><i className="fa fa-paperclip"></i>{'2'}</LI>
                            <LI><i className="fa fa-eye"></i></LI>
                          </UL>
                          <div className="customers">
                            <UL attrUL={{ className: 'simple-list d-flex flex-row' }}>
                              <LI attrLI={{ className: 'd-inline-block me-3' }}>
                                <P attrPara={{ className: 'f-12' }}>{rate}</P>
                              </LI>
                              <LI attrLI={{ className: 'd-inline-block' }}><Image attrImage={{ className: 'img-20 rounded-circle', src: ` ${dynamicImage(customer_img1)}`, alt: '' }} /></LI>
                              <LI attrLI={{ className: 'd-inline-block' }}><Image attrImage={{ className: 'img-20 rounded-circle', src: ` ${dynamicImage(customer_img2)}`, alt: '' }} /></LI>
                              <LI attrLI={{ className: 'd-inline-block' }}><Image attrImage={{ className: 'img-20 rounded-circle', src: ` ${dynamicImage(customer_img3)}`, alt: '' }} /></LI>
                            </UL>
                          </div>
                        </div>
                      </a>
                    </div>
                  )}
                >
                  {customboard}
                </Board>
              </main>
            </div>
          </CardBody>
        </Card>}
    </Fragment >
  );
};
export default CustomeBoard;