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
    name: "Usuario",
    selector: (Row) => Row["name"],
    sortable: true,
    center: true,
   
  },
  {
    name: "Cédula",
    selector: (Row) => Row["identification_card"],
    sortable: true,
    center: true,
  },
  
  {
    name: "Rol",
    selector: (Row) =>
      Row["role_id"] ? Row["role_id"]["name"] : "No tiene rol",
    sortable: true,
    center: true,
  },
  {
    name: "Fecha de creación",
    selector: (Row) => Row["created_at"],
    sortable: true,
    center: true,
  },
  {
    name: "Email",
    selector: (Row) => Row["email"],
    sortable: true,
    center: true,
  },
  {
    name: "Estado",
    selector: (Row) => Row["statusDot"],
    sortable: true,
    center: true,
    maxWidth: 20,
    minWidth: 50,
    width: 60,
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

const UsersDataTable = ({
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
        if (item.status === "A") {
          item.statusDot = <i className="fa fa-circle font-success f-12" />;
        } else {
          item.statusDot = (
            <i
              className="fa fa-circle font-danger f-12"
              style={{ cursor: "pointer" }}
              onClick={(e) => showAlertChangeStatus(item)}
            />
          );
        }

        if (item.id !== 1) {
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
              {permissions[6].is_allowed === 1 && (
                <button
                  style={{ border: "none", backgroundColor: "transparent" }}
                  onClick={(e) => handleEditAvatar(item)}
                >
                  <i
                    className="fa fa-user font-primary"
                    style={{ fontSize: "15pt" }}
                  ></i>
                </button>
              )}
              {permissions[6].is_allowed === 1 && (
                <button
                  style={{ border: "none", backgroundColor: "transparent" }}
                  onClick={(e) => handleEditPassword(item)}
                >
                  <i
                    className="fa fa-lock font-primary"
                    style={{ fontSize: "15pt" }}
                  ></i>
                </button>
              )}
              {permissions[6].is_allowed === 1 && (
                <button
                  style={{ border: "none", backgroundColor: "transparent" }}
                  onClick={(e) => handleEditSignature(item)}
                >
                  <i
                    className="fa fa-file font-primary"
                    style={{ fontSize: "15pt" }}
                  ></i>
                </button>
              )}
              {permissions[7].is_allowed === 1 && (
                <button
                  style={{ border: "none", backgroundColor: "transparent" }}
                  onClick={(e) => showAlert(item.id)}
                >
                  <i
                    className="fa fa-trash font-primary"
                    style={{ fontSize: "15pt" }}
                  ></i>
                </button>
              )}
            </div>
          );
        }
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
        item.name.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.identification_card &&
        item.identification_card
          .toLowerCase()
          .includes(filterText.toLowerCase()))
  );

  const handleEdit = (item) => {
    setItemSelected(item);
    toggleEdit();
  };

  const handleEditAvatar = (item) => {
    setItemSelected(item);
    toggleEditAvatar();
  };

  const handleEditPassword = (item) => {
    setItemSelected(item);
    toggleEditPassword();
  };

  const handleEditSignature = (item) => {
    setItemSelected(item);
    toggleEditSignature();
  };

  const showAlertChangeStatus = (data) => {
    SweetAlert.fire({
      title: "Seguro?",
      text: "Desea habilitar usuario!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    }).then((response) => {
      if (response.isConfirmed) {
        handleChangeStatus(data);
      }
    });
  };

  const handleChangeStatus = async (item) => {
    await axios({
      url: `${API_URL}user/Status/${item.id}`,
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: {
        status: item.status === "A" ? "I" : "A",
      },
    })
      .then((response) => {
        changing();
        toast.success("Usuario habilitado correctamente");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const showAlert = (id) => {
    SweetAlert.fire({
      title: "Seguro?",
      text: "Desea desactivar usuario!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    }).then((response) => {
      if (response.isConfirmed) {
        handleDelete(id);
      }
    });
  };

  const handleDelete = async (id) => {
    await axios({
      url: `${API_URL}user/${id}`,
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        changing();
        toast.success("Usuario eliminado correctamente");
      })
      .catch((error) => {
        console.log(error);
      });
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
                  <h5>Verde: Habilitado || Rojo: Deshabilitado</h5>
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
                        placeholder="Buscar usuario"
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
                        <i className="fa fa-plus"></i> Nuevo Usuario
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
export default UsersDataTable;
