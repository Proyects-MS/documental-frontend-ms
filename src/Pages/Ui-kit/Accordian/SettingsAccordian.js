import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Container} from 'reactstrap';
import AccordianSetting from '../../../_core/Ui-kits/Accordian/PrimaryColor/AccordianSetting';
import CategoriesSettings from '../../../_core/Ui-kits/Accordian/PrimaryColor/CategoriesSettings';

const SettingsAccordian = (props) => {

  const { permissions } = useSelector((data) => data.authUser);
    
  return (
    <Fragment>
      <Container fluid={true} className="accordian-page">
          {
            permissions[15].is_allowed === 1 && <CategoriesSettings />
          }
          {
            permissions[23].is_allowed === 1 && <AccordianSetting />
          }
      </Container>
    </Fragment>
  );
};
export default SettingsAccordian;


