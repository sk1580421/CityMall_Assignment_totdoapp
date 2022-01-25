import React, { useState } from 'react';
import { useStateValue } from '../StateProvider';
import Alert from './Alert';
import './css_files/add.css'

function Add() {

    const [{ store, isEditing }, dispatch] = useStateValue();

    const [list, setList] = useState([]);
    const [work, setWork] = useState('')
    const [alert, setAlert] = useState('false')
    const [type, setType] = useState('')
    const [msg, setMsg] = useState('')

    console.log(isEditing.id)


    const Add = (e) => {
        e.preventDefault();
        if (!work) {
            setAlert('true');
            setType('danger')
            setMsg("Please Type Something To Add")


        }
        else if (work && (isEditing.flag === 'true')) {
            dispatch({
                type: "final_edit",
                id: isEditing.id,

                work: work
            })
        }
        else {

            setAlert('true');
            setMsg('Task Successfully added')
            setType('success')

            dispatch({
                type: 'Add_work',
                item: {
                    id: new Date().getMilliseconds().toString(),
                    work: work
                }
            })


            // const newWork = {
            //     id: new Date().getTime().toString(),
            //     work: work
            // }
            // setList([...list, newWork])
            setWork('')
        }

    }

    const removeAlert = () => {
        setAlert('');
        setMsg('')
        setType('')

    }


    return <div>
        <div className="add">
            <input type="text" value={work} onChange={(e) => setWork(e.target.value)} />
            {(isEditing.flag === 'true') ? <button className='white' onClick={Add}>Edit</button> : <button className='black' onClick={Add}>Add</button>}

        </div>
        {alert === 'true' && <Alert msg={msg} type={type} removeAlert={removeAlert} />}

    </div>;
}

export default Add;
