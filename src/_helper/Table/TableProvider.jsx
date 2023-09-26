import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Context from './index';
import { TableDataApi } from '../../api';

const TableProvider = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(TableDataApi).then(res => setData(res.data));
    }, []);

    return (
        <Context.Provider
            value={{
                ...props,
                data
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default TableProvider;