import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { Spinner } from "../../../../AbstractElements";
import { API_URL, EndingDate } from "../../../../Constant";
import { toast } from "react-toastify";
import BarLoader from "react-spinners/BarLoader";
import SweetAlert from "sweetalert2";
import { useSelector } from "react-redux";

const NewProcessModal = ({ modal, toggle, data, changing }) => {
  // -----------------------------------------------------------------------------------------------------------------------------------------
  // STATE

  const token = localStorage.getItem("token");
  const { currentUser } = useSelector((data) => data.authUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [status, setStatus] = useState([]);
  const [procedures, setProcedures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [date, setDate] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [gestion, setGestion] = useState([]);

  useEffect(() => {
    const now = new Date();
    const day = ("0" + now.getDate()).slice(-2);
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const today = day + "-" + month + "-" + now.getFullYear();

    reset({
      date: today,
      user: currentUser.name,
    });
  }, []);

  useEffect(() => {
    getData();
    return () => {
      setStatus([]);
    };
  }, []);

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // FUNCTIONS

  const getData = async () => {
    const now = new Date();
    const day = ("0" + now.getDate()).slice(-2);
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const hour = ("0" + now.getHours()).slice(-2);
    const minutes = ("0" + now.getMinutes()).slice(-2);
    const today =
      day + "-" + month + "-" + now.getFullYear() + " " + hour + ":" + minutes;
    const inputToday =
      now.getFullYear() + "-" + month + "-" + day + " " + hour + ":" + minutes;

    await axios({
      url: `${API_URL}states`,
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setDate(today);
        reset({
          date: inputToday,
          user: currentUser.name,
        });
        setStatus(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const showAlert = (data) => {
    SweetAlert.fire({
      title: "Seguro?",
      text: "Desea crear proceso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    }).then((response) => {
      if (response.isConfirmed) {
        onSubmit(data);
      }
    });
  };

  const onSubmit = async (dat) => {
    setIsSaving(true);

    const now = new Date();
    const day = ("0" + now.getDate()).slice(-2);
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const today = day + "-" + month + "-" + now.getFullYear();
    const hour = ("0" + now.getHours()).slice(-2);
    const minutes = ("0" + now.getMinutes()).slice(-2);
    const seconds = ("0" + now.getSeconds()).slice(-2);
    const todayTask =
      day + "-" + month + "-" + now.getFullYear() + " " + hour + ":" + minutes;

    const endingDate = new Date(dat.ending);

    if (endingDate < now) {
      toast.error("La fecha debería ser mayor a la actual");
      setIsSaving(false);
    } else {
      const dayE = ("0" + endingDate.getDate()).slice(-2);
      const monthE = ("0" + (endingDate.getMonth() + 1)).slice(-2);
      const hourE = ("0" + endingDate.getHours()).slice(-2);
      const minutesE = ("0" + endingDate.getMinutes()).slice(-2);
      const ending =
        dayE +
        "-" +
        monthE +
        "-" +
        endingDate.getFullYear() +
        " " +
        hourE +
        ":" +
        minutesE;

      let remainTime = (endingDate - now + 1000) / 1000;

      //Constantes de tiempo
        const diferenciaEnTiempo = Math.abs(new Date(endingDate) - now);

        const diferenciaEnDias = Math.floor(diferenciaEnTiempo / (1000 * 60 * 60 * 24));
        const diferenciaEnHoras = Math.floor(
          (diferenciaEnTiempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const diferenciaEnMinutos = Math.floor(
          (diferenciaEnTiempo % (1000 * 60 * 60)) / (1000 * 60)
        );


        //Calculo del tiempo restante
        const processTime = `${diferenciaEnDias} día(s) | ${diferenciaEnHoras} hora(s) | ${diferenciaEnMinutos} minuto(s)`;
        

      if (dat !== "") {
        axios({
          url: `${API_URL}LastSeq`,
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
          .then((sequentialResponse) => {
            let lastSequential = sequentialResponse.data.sequential;
            let last = 1;
            if (lastSequential) {
              last = parseInt(lastSequential.split("-")[1]) + 1;
            }

            axios({
              url: `${API_URL}process`,
              method: "POST",
              headers: {
                authorization: `Bearer ${token}`,
              },
              data: {
                name: dat.name,
                date: date,
                state_id: dat.status,
                user_asig_id: currentUser.id,
                user_id: currentUser.id,
                description: dat.description,
                priority: dat.priority,
                last_updated_user: currentUser.id,
                time: processTime,
                procedures: dat.procedure,
                hiring: dat.hiring,
                ending: ending,
                hiring_class: dat.hiring_class,
                sequential: `${now.getFullYear()}-${last}`,
                last_assign_date: date,
              },
            })
              .then(async (response) => {
                await axios({
                  url: `${API_URL}assignhistory`,
                  method: "POST",
                  headers: {
                    authorization: `Bearer ${token}`,
                  },
                  data: {
                    user_id: currentUser.id,
                    date: today,
                    process_id: response.data.data.id,
                  },
                })
                  .then(async (asignResponse) => {
                    await axios({
                      url: `${API_URL}involved`,
                      method: "POST",
                      headers: {
                        authorization: `Bearer ${token}`,
                      },
                      data: {
                        user_id: currentUser.id,
                        process_id: response.data.data.id,
                        estado: "A",
                      },
                    })
                      .then(async (involvedResponse) => {
                        await axios({
                          url: `${API_URL}history`,
                          method: "POST",
                          headers: {
                            authorization: `Bearer ${token}`,
                          },
                          data: {
                            description: `${currentUser.name} creo el proceso ${response.data.data.name}`,
                            date: todayTask,
                            process_id: response.data.data.id,
                          },
                        })
                          .then((response) => {
                            changing();
                            reset();
                            toggle();
                            toast.success("Proceso agregado correctamente");
                          })
                          .catch((error) => {
                            console.log(error);
                          });
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        errors.showMessages();
      }
    }
  };

  const handleCancel = () => {
    reset();
    toggle();
  };

  const selectHiring = (hiring) => {
    if (hiring === "Bienes y Servicios Normalizados") {
      let proceduresList = [
        {
          label: "Catálogo Electrónico",
          value: "Catálogo Electrónico",
        },
        {
          label: "Subasta Inversa Electrónica",
          value: "Subasta Inversa Electrónica",
        },
        {
          label: "Ínfima Cuantía",
          value: "Ínfima Cuantía",
        },
        {
          label: "Feria Inclusiva",
          value: "Feria Inclusiva",
        },
        {
          label: "Menor Cuantía de Bienes",
          value: "Menor Cuantía de Bienes",
        },
        {
          label: "Menor Cuantía de Servicios",
          value: "Menor Cuantía de Servicios",
        },
      ];
      setProcedures(proceduresList);
    } else if (hiring === "Bienes y Servicios No Normalizados") {
      let proceduresList = [
        {
          label: "Menor Cuantía",
          value: "Menor Cuantía",
        },
        {
          label: "Cotización",
          value: "Cotización",
        },
        {
          label: "Licitación",
          value: "Licitación",
        },
        {
          label: "Menor Cuantía de Bienes",
          value: "Menor Cuantía de Bienes",
        },
        {
          label: "Menor Cuantía de Servicios",
          value: "Menor Cuantía de Servicios",
        },
      ];
      setProcedures(proceduresList);
    } else if (hiring === "Obras") {
      let proceduresList = [
        {
          label: "Menor Cuantía",
          value: "Menor Cuantía",
        },
        {
          label: "Cotización",
          value: "Cotización",
        },
        {
          label: "Licitación",
          value: "Licitación",
        },
        {
          label: "Contratación Integral por Precio Fijo",
          value: "Contratación Integral por Precio Fijo",
        },
      ];
      setProcedures(proceduresList);
    } else if (hiring === "Consultoría") {
      let proceduresList = [
        {
          label: "Contratación Directa",
          value: "Contratación Directa",
        },
        {
          label: "Lista Corta",
          value: "Lista Corta",
        },
        {
          label: "Concurso Público",
          value: "Concurso Público",
        },
      ];
      setProcedures(proceduresList);
    } else {
      setProcedures([]);
    }
  };

  const selectGestion = (ges) => {
    if (ges === "Proceso de Contratación") {
      let Proct = [
        {
          label: "Bienes y Servicios Normalizados",
          value: "Bienes y Servicios Normalizados",
        },
        {
          label: "Bienes y Servicios No Normalizados",
          value: "Bienes y Servicios No Normalizados",
        },
        {
          label: "Obras",
          value: "Obras",
        },
        {
          label: "Consultoría",
          value: "Consultoría",
        },
      ];
      setGestion(Proct);
      setProcedures([]);
    } else if (ges === "Gestión Administrativa") {
      let Procec = [
        {
          label: "Interno",
          value: "Interno",
        },
        {
          label: "Externo",
          value: "Externo",
        },
        
      ];
      setProcedures(Procec);
      setGestion([]);
    }else {
      setGestion([]);
      setProcedures([]);
    }
  };

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // VIEW

  return (
    <Modal isOpen={modal} toggle={toggle} centered size="lg">
      <ModalHeader toggle={toggle}>{"Nuevo Proceso"}</ModalHeader>
      <Form
        className="theme-form mega-form needs-validation"
        noValidate=""
        onSubmit={handleSubmit(showAlert)}
      >
        <ModalBody>
          {loading ? (
            <div className="email-right-aside">
              <div className="loader-box">
                <Spinner attrSpinner={{ className: "loader-7" }} />
              </div>
            </div>
          ) : status.length === 0 ? (
            <p style={{ color: "red" }}>
              *No se han registrado estados, registre al menos uno para
              continuar.
            </p>
          ) : (
            <div className="row">
              <div className="col-md-12">
                <FormGroup>
                  <Label className="col-form-label">Nombre</Label>
                  <input
                    className="form-control"
                    name="name"
                    type="text"
                    {...register("name", { required: true })}
                  />
                  <span>{errors.name && "*Requerido"}</span>
                  <div className="valid-feedback">{"Correcto"}</div>
                </FormGroup>
              </div>
              <div className="col-md-6">
                <FormGroup>
                  <Label className="col-form-label">Fecha</Label>
                  <input
                    className="form-control"
                    name="date"
                    disabled
                    type="datetime-local"
                    {...register("date", { required: false })}
                  />
                  <span>{errors.date && "*Requerido"}</span>
                  <div className="valid-feedback">{"Correcto"}</div>
                </FormGroup>
              </div>
              <div className="col-md-6">
                <FormGroup>
                  <Label className="col-form-label">
                    Fecha de Finalización
                  </Label>
                  <input
                    className="form-control"
                    name="ending"
                    type="datetime-local"
                    {...register("ending", { required: true })}
                  />
                  <span>{errors.ending && "*Requerido"}</span>
                  <div className="valid-feedback">{"Correcto"}</div>
                </FormGroup>
              </div>
              <div className="col-md-6">
                <FormGroup>
                  <Label className="col-form-label">Estado</Label>
                  <select
                    className="form-control"
                    name="status"
                    {...register("status", { required: true })}
                  >
                    <option value={""}>Seleccione...</option>
                    {status.map((item) => {
                      return (
                        <option
                          key={item.id}
                          value={item.id}
                          style={{ color: item.colour }}
                        >
                          {item.state}
                        </option>
                      );
                    })}
                  </select>
                  <span style={{ color: "red" }}>
                    {errors.status && "*Requerido"}
                  </span>
                  <div className="valid-feedback">{"Correcto"}</div>
                </FormGroup>
              </div>
              <div className="col-md-6">
                <FormGroup>
                  <Label className="col-form-label">Prioridad</Label>
                  <select
                    className="form-control"
                    name="status"
                    {...register("priority", { required: true })}
                  >
                    <option value={""}>Seleccione...</option>
                    <option value={"Alta"} >
                      Alta
                    </option>
                    <option value={"Media"} >
                      Media
                    </option>
                    <option value={"Baja"} >
                      Baja
                    </option>
                  </select>
                  <span style={{ color: "red" }}>
                    {errors.priority && "*Requerido"}
                  </span>
                  <div className="valid-feedback">{"Correcto"}</div>
                </FormGroup>
              </div>
              <div className="col-md-12">
                <FormGroup>
                  <Label className="col-form-label">Tipo de Proceso</Label>
                  <select
                    className="form-control"
                    name="status"
                    {...register("hiring_class", { required: true })}
                    onChange={(e) => selectGestion(e.target.value)
                    }
                  >
                    <option value={""}>Seleccione...</option>
                    
                    <option value={"Proceso de Contratación"}>
                      Proceso de Contratación
                    </option>
                    <option value={"Gestión Administrativa"}>
                      Gestión Administrativa
                    </option>
                  </select>
                  <span style={{ color: "red" }}>
                    {errors.hiring_class && "*Requerido"}
                  </span>
                  <div className="valid-feedback">{"Correcto"}</div>
                </FormGroup>
              </div>
              <div className="col-md-6">
                <FormGroup>
                  <Label className="col-form-label">Contratación</Label>
                  <select
                    //disabled={disabled}
                    className="form-control"
                    name="status"
                    {...register("hiring", { required: false })}
                    onChange={(e) => selectHiring(e.target.value)}
                  >
                    <option value={""}>Seleccione...</option>
                    {/* <option value={'Bienes y Servicios Normalizados'}>Bienes y Servicios Normalizados</option>
                              <option value={'Bienes y Servicios No Normalizados'}>Bienes y Servicios No Normalizados</option>
                              <option value={'Obras'}>Obras</option>
                              <option value={'Consultoría'}>Consultoría</option> */}

                    {gestion.map((item, i) => {
                      return (
                        <option key={i} value={item.value}>
                          {item.label}
                        </option>
                      );
                    })}
                  </select>
                  <span style={{ color: "red" }}>
                    {errors.hiring && "*Requerido"}
                  </span>
                  <div className="valid-feedback">{"Correcto"}</div>
                </FormGroup>
              </div>
              <div className="col-md-6">
                <FormGroup>
                  <Label className="col-form-label">Procedimiento</Label>
                  <select
                    //disabled={disabled}
                    className="form-control"
                    name="status"
                    {...register("procedure", { required: true })}
                  >
                    <option value={""}>Seleccione...</option>
                    {procedures.map((item, i) => {
                      return (
                        <option key={i} value={item.value}>
                          {item.label}
                        </option>
                      );
                    })}
                  </select>
                  <span style={{ color: "red" }}>
                    {errors.procedure && "*Requerido"}
                  </span>
                  <div className="valid-feedback">{"Correcto"}</div>
                </FormGroup>
              </div>
              <div className="col-md-12">
                <FormGroup>
                  <Label className="col-form-label">Descripción</Label>
                  <textarea
                    className="form-control"
                    name="description"
                    {...register("description", { required: false })}
                  ></textarea>
                  <span style={{ color: "red" }}>
                    {errors.description && "*Requerido"}
                  </span>
                  <div className="valid-feedback">{"Correcto"}</div>
                </FormGroup>
              </div>
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <div className="btn btn-danger" onClick={() => handleCancel()}>
            <i className="icofont icofont-close-squared-alt"></i> Cancelar
          </div>
          {!isSaving ? (
            <Button color="primary">
              <i className="icofont icofont-diskette"></i> Guardar
            </Button>
          ) : (
            <div
              className="btn btn-primary d-flex justify-content-center align-items-center"
              style={{ height: 34, width: 125 }}
            >
              <BarLoader color={"white"} size={100} />
            </div>
          )}
        </ModalFooter>
      </Form>
    </Modal>
  );

  // -----------------------------------------------------------------------------------------------------------------------------------------
};

export default NewProcessModal;
