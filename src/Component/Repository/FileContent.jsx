import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { PlusSquare, Upload } from 'react-feather';
import { H4, H6, LI, P, UL, Image, H5, Spinner, Badges } from '../../AbstractElements';
import { CardBody, CardHeader, Form, Input, Media, Row, Col, Label, FormGroup } from 'reactstrap';
import errorImg from '../../assets/images/search-not-found.png';
import SearchBar from './SearchBar';
import { AddNew, AllFiles, API_URL, Files, Folders, RecentlyOpenedFiles } from '../../Constant';
import { FormControl } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const FileContent = ({data}) => {

  const token = localStorage.getItem('token');
  const { currentUser } = useSelector((data) => data.authUser);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProcess, setSelectedProcess] = useState('0');
  const [processes, setprocesses] = useState({});
  const [loading, setLoading] = useState(true);
  const [dat, setDat] = useState(data)

  useEffect(() => {
    if(selectedProcess.toString() === '0'){
      setDat(data);
    }else{
      let dat = [];
      data.map((item) => {
        if(item.process_id){
          if(item.process_id.id.toString() === selectedProcess.toString()){
            dat = [...dat, item];
          }
        }
        
      });

      setDat(dat);
    }
    
  }, [ selectedProcess ]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios({
      url: `${API_URL}processuser/${currentUser.id}`,
      method: 'GET',
      headers: {
        'authorization': `Bearer ${token}`
      }
    }).then((response) => {
      setprocesses(response.data.data);
      setLoading(false);
    }).catch((error) => {
      console.log(error);
    });
  }

  const handleDownload = async (item) => {
    await axios({
        url: `${API_URL}ftp/${item.url}`,
        method: 'GET',
        responseType: 'arraybuffer',
        headers: {
            'authorization' : `Bearer ${token}`
        }
    }).then((Response) => {
        const blob = new Blob([Response.data]);
        const file = new File([blob], `${item.name}.${item.ext_file}`, {type: item.type, lastModified: Date.now()});
        const url = URL.createObjectURL(file);
        var a = document.createElement('a');
        a.href = url;
        a.download = `${item.name}.${item.ext_file}`;
        a.click();
    }).catch((error) => {
        console.log(error);
    });
  }

  const filelist = dat.filter((item) => {
    if (searchTerm == null)
      return item;
    else if (item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.category_id && item.category_id.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    }
  }).map((item, i) => {
    return (
      <LI attrLI={{ className: 'file-box'}} key={i}>
        <div className="file-top">
          <i className={
          `${item.ext_file === 'pdf' || item.ext_file === 'doc' || item.ext_file === 'docs' || item.ext_file === 'xls' || item.ext_file === 'xlsx' ? 'fa fa-file-text-o' : 'fa fa-file-image-o'}
           ${item.ext_file === 'pdf' ? 'text-danger' : item.ext_file === 'doc' || item.ext_file === 'docs' ? 'text-info' : item.ext_file === 'xls' || item.ext_file === 'xlsx' ? 'text-success' : 'text-info'}
          `
          // fa fa-file-archive-o txt-secondary
        } style={{color: 'red'}} ></i><i style={{cursor: 'pointer'}} onClick={() => handleDownload(item)} className="fa fa-download f-14 ellips"></i></div>
        <div className="file-bottom"><H6 style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>{item.name}.{(item.ext_file).toLowerCase()}</H6><P className="mb-1">{item.size}</P><P>{'Última modificación'}: {item.updated_at}</P> <Badges attrBadge={{ color: 'info' }} >{item.category_id && item.category_id.name}</Badges>
        </div>
      </LI>
    );
  });

  if(loading){
    return(
      <Fragment>
       <div className="loader-box" style={{height: '90vh'}}><Spinner attrSpinner={{ className: 'loader-7' }}/></div> 
      </Fragment>
    );
  }

  return (
    <Fragment>
      <CardHeader>
        <Row>
          <Col className="col-md-4">
            <FormGroup>
                    <select className='form-control' onChange={(e) => setSelectedProcess(e.target.value)}>
                      <option value="0">Seleccione un proceso...</option>
                      {
                        processes.map((item) => {
                          return(
                            <option key={item.process_id.id} value={item.process_id.id}>{item.process_id.name}</option>
                          );
                        })
                      }
                    </select>
            </FormGroup>
          </Col>
          <Col className="col-md-8">
            <Media style={{float: 'right'}}>
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </Media>
          </Col>
        </Row>
      </CardHeader>
      {filelist.length ?
        <CardBody className="file-manager">
          <H4>Todos los Archivos</H4>
          <UL attrUL={{ className: 'simple-list files flex-row' }}>{filelist} </UL>
        </CardBody>
        : <Image attrImage={{ className: 'img-fluid m-auto', src: errorImg, alt: '' }} />
      }
    </Fragment>
  );
};
export default FileContent;