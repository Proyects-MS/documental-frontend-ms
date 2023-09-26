import React, { Fragment, useCallback, useState } from 'react';
import SweetAlert from 'sweetalert2';
import { Media } from 'reactstrap';
import { Name, Age, MobileNo, EmailAddress, History, Edit, Delete, Print, General } from '../../../Constant';
import { deletedUser } from '../../../Services/Contact.Service';
import { H5, H6, Image, LI, P, UL } from '../../../AbstractElements';
import SearchNotFoundClass from './SearchNotFoundClass';
import PrintModal from './PrintModal';

const ContactDetailsClass = ({ selectedUser, userEditCallback, editurl, imgUpdate }) => {
  const [printmodal, setPrintModal] = useState(false);
  const printModalToggle = () => setPrintModal(!printmodal);

  const toggleCallback = useCallback((toggle) => {
    setPrintModal(toggle);
  }, []);

  const history = () => {
    document.querySelector('.history').classList.add('show');
  };

  const EditUSers = (usersData) => {
    userEditCallback(true, usersData, usersData.avatar);
  };

  const deleteUser = (userId) => {

    SweetAlert.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        deletedUser(userId);
        SweetAlert.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      } else {
        SweetAlert.fire(
          'Your imaginary file is safe!'
        );
      }
    });
  };

  return (
    <Fragment>
      {selectedUser ?
        <div className="profile-mail">
          <Media>
            <Image attrImage={{ className: 'img-100 img-fluid m-r-20 rounded-circle update_img_0', src: `${imgUpdate ? editurl : selectedUser.avatar}`, alt: '' }} />
            <Media body className="mt-0">
              <H5><span className="first_name_0">{selectedUser.name}</span><span className="last_name_0">{selectedUser.surname}</span></H5>
              <P attrPara={{ className: 'email_add_0' }} >{selectedUser.name}{'@gmail.com'}</P>
              <UL attrUL={{ className: 'simple-list flex-row' }}>
                <LI><a href="#javaScript" onClick={() => EditUSers(selectedUser)}>{Edit}</a></LI>
                <LI><a href="#javaScript" onClick={() => deleteUser(selectedUser.id)}>{Delete}</a></LI>
                <LI><a href="#javaScript" onClick={() => history()}>{History}</a></LI>
                <LI><a href="#javaScript" onClick={() => printModalToggle()} data-toggle="modal" data-target="#printModal">{Print}</a></LI>
              </UL>
            </Media>
          </Media>
          <div className="email-general">
            <H6 attrH6={{ className: 'mb-3' }} >{General}</H6>
            <UL attrUL={{ className: 'simple-list' }}>
              <LI>{Name} <span className="font-primary first_name_0">{selectedUser.name}</span></LI>
              <LI>{Age} <span className="font-primary">{selectedUser.age}</span></LI>
              <LI>{MobileNo} <span className="font-primary mobile_num_0">{selectedUser.mobile}</span></LI>
              <LI>{EmailAddress} <span className="font-primary email_add_0">{`${selectedUser.name}@gmail.com`} </span></LI>
            </UL>
          </div>
        </div>
        :
        <SearchNotFoundClass />
      }
      {selectedUser &&
        <PrintModal toggleCallback={toggleCallback} printmodal={printmodal} selectedUser={selectedUser} />}
    </Fragment>
  );
};

export default ContactDetailsClass;