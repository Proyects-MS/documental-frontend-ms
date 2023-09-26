import React, {
    Fragment,
    useState,
    useCallback,
    useMemo,
    useEffect,
  } from "react";
  import differenceBy from "lodash/differenceBy";
  import { toast } from "react-toastify";
  import DataTable from "react-data-table-component";
  import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardHeader,
    Button,
  } from "reactstrap";
  import { Btn, H5 } from "../../../AbstractElements";
  import { Input } from "react-bootstrap-typeahead";
  import { useSelector } from "react-redux";
  import axios from "axios";
  import { API_URL } from "../../../Constant";
  import SweetAlert from "sweetalert2";
  
  // Table Headers
  export const tableColumns = [
    {
      name: "Nombre Contratación",
      selector: (Row) => Row["name"],
      sortable: true,
      center: true,
     
    },
    {
      name: "Tipo de proceso",
      selector: (Row) =>
        Row["id_processtype"] ? Row["id_processtype"]["name"] : "No tiene tipo de porceso",
      sortable: true,
      center: true,
    },
    {
      name: "",
      selector: (Row) => Row["actions"],
      sortable: false,
      center: true,
      maxWidth: 20,
      minWidth: 50,
      width: 60,
    },
  ];
  
  // Pagination options
  const PaginationOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };
  
  const ContrationDataTable = ({
    toggle,
    toggleEdit,
    toggleEditAvatar,
    toggleEditPassword,
    toggleEditSignature,
    tableData,
    setItemSelected,
    changing,
  }) => {
    // -----------------------------------------------------------------------------------------------------------------------------------------
    // STATE
  
    const token = localStorage.getItem("token");
    const { permissions } = useSelector((data) => data.authUser);
  
    const [data, setData] = useState(tableData);
    const [toggleCleared, setToggleCleared] = useState(false);
    const [filterText, setFilterText] = useState("");
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const reDesignTable = () => {
        let finalData = data;
        finalData.map((item) => {
          

            item.actions = (
              <div>
                {permissions[6].is_allowed === 1 && (
                  <button
                    style={{ border: "none", backgroundColor: "transparent" }}
                    onClick={(e) => handleEdit(item)}
                  >
                    <i
                      className="fa fa-edit font-primary"
                      style={{ fontSize: "15pt" }}
                    ></i>
                  </button>
                )}
              </div>
            );
       
        });
  
        setData(finalData);
      };
  
      reDesignTable();
      setLoading(false);
  
      return () => {
        setData([]);
      };
    }, [data]);
  
    // -----------------------------------------------------------------------------------------------------------------------------------------
  
    // -----------------------------------------------------------------------------------------------------------------------------------------
    // FUNCTIONS
  
    const filteredItems = data.filter(
      (item) =>
        (item.name &&
          item.name.toLowerCase().includes(filterText.toLowerCase()))
    );
  
    const handleEdit = (item) => {
      setItemSelected(item);
      toggleEdit();
    };
  
   
   
  
    // -----------------------------------------------------------------------------------------------------------------------------------------
  
    // -----------------------------------------------------------------------------------------------------------------------------------------
    // VIEW
  
    if (loading) {
      return <></>;
    }
  
    return (
      <Fragment>
        <Container fluid={true} className="data-tables">
          <Row>
            <Col sm="12">
              <Card>
                <CardBody>
                  <div
                    className="row w-100"
                    style={{ margin: 0, padding: 0, border: 0 }}
                  >
                    <div className={`col-md-9`}>
                  
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span style={{ marginRight: "5px" }}>
                          <i
                            color="primary"
                            className="icofont icofont-search-alt-1"
                            style={{ fontSize: "15pt" }}
                          ></i>
                        </span>
                        
                        <Input
                          type="text"
                          className="input-txt-bx form-control"
                          style={{ border: "none" }}
                          placeholder="Buscar Contratación"
                          defaultValue={filterText}
                          onChange={(e) => setFilterText(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      {permissions[5].is_allowed === 1 && (
                        <Button
                          color="primary"
                          style={{ width: "100%", margin: 0 }}
                          onClick={toggle}
                        >
                          <i className="fa fa-plus"></i> Nueva Contratación
                        </Button>
                      )}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container fluid={true} className="data-tables">
          <Row>
            <Col sm="12">
              <Card>
                <CardBody>
                  <DataTable
                    data={filteredItems}
                    columns={tableColumns}
                    striped={true}
                    center={true}
                    persistTableHead
                    clearSelectedRows={toggleCleared}
                    pagination
                    paginationResetDefaultPage={resetPaginationToggle}
                    paginationComponentOptions={PaginationOptions}
                    noDataComponent={
                      <div className="mt-4">
                        <p>No existen registros de usuarios</p>
                      </div>
                    }
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  
    // -----------------------------------------------------------------------------------------------------------------------------------------
  };
  export default ContrationDataTable;
  