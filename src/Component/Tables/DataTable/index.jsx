import React, { Fragment, useState, useCallback, useMemo } from 'react';
import differenceBy from 'lodash/differenceBy';
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import { Btn, H5 } from '../../../AbstractElements';
import { tableColumns, tableData } from '../../../Data/mock-table/dummyTableData';

const DataTablesContain = () => {
  const [data, setData] = useState(tableData);
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);

  const handleRowSelected = useCallback(state => {
    setSelectedRows(state.selectedRows);
  }, []);

  const contextActions = useMemo(() => {
    const handleDelete = () => {
      if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.name)}?`)) {
        setToggleCleared(!toggleCleared);
        setData(differenceBy(data, selectedRows, 'name'));
        toast.success('Successfully Deleted !');
      }
    };

    return <Btn attrBtn={{ color: 'danger', onClick: handleDelete }} key="delete">Delete</Btn>;
  }, [data, selectedRows, toggleCleared]);

  return (
    <Fragment>
      <Container fluid={true} className="data-tables">
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>Data Table</H5>
              </CardHeader>
              <CardBody>
                <DataTable
                  data={data}
                  columns={tableColumns}
                  striped={true}
                  center={true}
                  persistTableHead
                  contextActions={contextActions}
                  onSelectedRowsChange={handleRowSelected}
                  clearSelectedRows={toggleCleared}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );

};
export default DataTablesContain;