import React, { useState, Fragment, useContext } from 'react';
import { Input } from 'reactstrap';
import { toast } from 'react-toastify';
import { Check, Trash2 } from 'react-feather';
import TodoContext from '../../_helper/todo-app';
import { Btn, H4, LI, UL } from '../../AbstractElements';
import { AddNewTask, AddTask, API_URL, Close } from '../../Constant';
import axios from 'axios';
import SweetAlert from 'sweetalert2';

const TodoList = ({data, setIdSelected, toggleEdit, changing}) => {

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // STATE

  const token = localStorage.getItem('token');

  const handleSelect = (id) => {
    setIdSelected(id);
    toggleEdit();
  };

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // FUNCTIONS

  const showAlert = (id) =>{
    SweetAlert.fire({
        title: 'Seguro?',
        text: 'Desea eliminar tarea!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ok',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
    }).then((response) => {
      if (response.isConfirmed) {
        handleDelete(id);
      }
    });
  }

  const showAlertComplete = (id) =>{
    SweetAlert.fire({
        title: 'Seguro?',
        text: 'Desea completar tarea!, una vez completada la tarea, no se podra abrir nuevamente',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ok',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
    }).then((response) => {
      if (response.isConfirmed) {
        handleComplete(id);
      }
    });
  }

  const handleDelete = async (id) => {
    await axios({
      url: `${API_URL}tasks/${id}`,
      method: 'DELETE',
      headers: {
          'authorization': `Bearer ${token}`
      },
    }).then((response) => {
      toast.success('Tarea eliminada correctamente');
      changing();
    }).catch((error) => {
      console.log(error);
    });
  }

  const handleComplete = async (id) => {
    await axios({
      url: `${API_URL}taskStatus/${id}`,
      method: 'PUT',
      headers: {
          'authorization': `Bearer ${token}`
      },
      data: {
        status: 'C'
      }
    }).then((response) => {
      toast.success('Tarea completada correctamente');
      changing();
    }).catch((error) => {
      console.log(error);
    });
  }

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // VIEW

  return (
    <Fragment>
      
      <div className="todo-list-body">
        <UL attrUL={{ className: 'simple-list', id: 'todo-list' }}>
          {
            data.length > 0 &&
            data.map((item) =>
              <LI attrLI={{ className: `task ${item.status === 'C' ? 'completed' : ''}`}} key={item.id} >
                <div className="task-container">
                  <div onClick={() => handleSelect(item.id)}>
                    <H4 style={{cursor: 'pointer'}} attrH4={{ className: 'task-label' }} >{item.name}</H4>
                  </div>
              
                
                  <span className="task-action-btn">
                    {
                      item.status === 'A' && <span className="action-box large delete-btn" title="Delete Task" onClick={() => showAlert(item.id)} ><Trash2 className="icon icon-trash" /></span>
                    }
                    {
                      item.status === 'A' && <span className="action-box large complete-btn" title="Mark Complete" onClick={() => showAlertComplete(item.id)}><Check className="icon icon-check" /></span>
                    }
                  </span>
                </div>
              </LI>
            )
          }
        </UL>
      </div>
    </Fragment >

    // -----------------------------------------------------------------------------------------------------------------------------------------
  );
};
export default TodoList;