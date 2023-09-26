import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { PlusSquare, Upload } from 'react-feather';
import { H4, H6, LI, P, UL, Image, H5 } from '../../AbstractElements';
import { CardBody, CardHeader, Form, Input, Media } from 'reactstrap';
import errorImg from '../../assets/images/search-not-found.png';
import SearchBar from './SearchBar';
import { AddNew, AllFiles, Files, Folders, RecentlyOpenedFiles } from '../../Constant';

const FileContent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [myfile, setMyFile] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/files.json`).then((response) => {
      setMyFile(response.data);
    });
  }, []);
  // eslint-disable-next-line
  const filelist = myfile.filter((data) => {
    if (searchTerm == null)
      return data;
    else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return data;
    }
  }).map((data, i) => {
    return (
      <LI attrLI={{ className: 'file-box' }} key={i}>
        <div className="file-top"><i className={data.icon} ></i><i className="fa fa-ellipsis-v f-14 ellips"></i></div>
        <div className="file-bottom"><H6>{data.name}</H6><P className="mb-1">{data.size}</P><P>{'last open'} : {data.modify}</P>
        </div>
      </LI>
    );
  });
  const getFile = () => {
    document.getElementById('upfile').click();
  };
  const onFileChange = event => {
    setSelectedFile(event.target.files[0]);
  };
  const onFileUpload = () => {
    let myfiles = [...myfile];
    if (selectedFile !== null) {
      myfiles.push({
        id: myfile.length + 1,
        name: selectedFile.name,
        size: `${selectedFile.size}`,
        modify: `${selectedFile.lastModifiedDate}`,
        icon: 'fa fa-file-text-o txt-info'
      });
      setMyFile(myfiles);
      toast.success('File Upload Successfully !');
    } else {
      toast.error('Plese Select at least one file !');
    }
  };
  return (
    <Fragment>
      <CardHeader>
        <Media>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Media body className="text-end">
            <Form className="d-inline-flex">
              <div className="btn btn-primary" onClick={getFile}><PlusSquare />{AddNew}</div>
              <div style={{ height: '0px', width: '0px', overflow: 'hidden' }}>
                <Input id="upfile" multiple type="file" onChange={(e) => onFileChange(e)} /></div>
            </Form>
            <div className="btn btn-outline-primary ms-2" onClick={onFileUpload}><Upload />{'Upload'}</div>
          </Media>
        </Media>
      </CardHeader>
      {filelist.length ?
        <CardBody className="file-manager">
          <H4>{AllFiles}</H4> <H6>{RecentlyOpenedFiles}</H6>
          <UL attrUL={{ className: 'simple-list files flex-row' }}> {filelist}</UL>
          <H5 attrH5={{ className: 'mt-4' }}>{Folders}</H5>
          <UL attrUL={{ className: 'simple-list folder flex-row' }}>
            {myfile.map((item) => {
              return (
                <LI attrLI={{ className: 'folder-box' }} key={item.id}>
                  <Media><i className={item.folderclass}></i>
                    <Media body className=" ms-3"><H6 attrH6={{ className: 'mb-0' }}>{item.title}</H6><P>{item.foldersize}</P></Media></Media>
                </LI>
              );
            })}
          </UL>
          <H5 attrH5={{ className: 'mt-4' }}>{Files}</H5>
          <UL attrUL={{ className: 'simple-list files flex-row' }}>{filelist} </UL>
        </CardBody>
        : <Image attrImage={{ className: 'img-fluid m-auto', src: errorImg, alt: '' }} />
      }
    </Fragment>
  );
};
export default FileContent;