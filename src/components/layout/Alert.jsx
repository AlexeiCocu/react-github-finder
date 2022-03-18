import React from 'react';
import {useContext} from "react";
import AlertContext from "../../context/alert/AlertContext";
import {VscError} from "react-icons/vsc";

const Alert = () => {

    const {alert} = useContext(AlertContext)


    return alert !== null && (
        <div className='flex items-center mb-4 space-x-2'>
            {alert.type === 'error' && ( <VscError className='text-error' /> )}
            <div  className='font-semibold'><strong>{alert.msg}</strong></div>
        </div>
    )
};

export default Alert;