import React, { Fragment, useContext, useState } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import ChatAppContext from '../../../_helper/chat-app/index';

const SearchChatList = () => {
  const { searchMember } = useContext(ChatAppContext);
  const [searchKeyword, setSearchKeyword] = useState('');
  const handleSearchKeyword = (keyword) => {
    setSearchKeyword(keyword);
    searchMember(keyword);
  };
  return (
    <Fragment>
      <div className="search">
        <Form className="theme-form">
          <FormGroup>
            <Input
              className="form-control"
              type="text"
              placeholder="search"
              defaultValue={searchKeyword}
              onChange={(e) =>
                handleSearchKeyword(e.target.value)
              }
            />
            <i className="fa fa-search"></i>
          </FormGroup>
        </Form>
      </div>
    </Fragment>
  );
};

export default SearchChatList;