import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import SearchResultContain from '../../Component/Search Result';

const SearchResult = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="SearchResult" title="Search Result" />
      <SearchResultContain />
    </Fragment>
  );
};
export default SearchResult;