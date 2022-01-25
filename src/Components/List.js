import React from 'react';
import './css_files/list.css'
import { IoMdFlower } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { useStateValue } from '../StateProvider';





function List({ work, id }) {

    console.log(id)

    const [{ isEditing }, dispatch] = useStateValue();

    const Remove = () => {

        dispatch({
            type: "Remove_work",
            id: id
        })


    }
    const Edit = () => {


        dispatch({
            type: "Edit_work",
            isEditing: {
                flag: 'true',
                id: id
            }

        })





    }



    return <div id={id} className='list'>

        <div className='flower'>
            <IoMdFlower size={'1.2vw'} color='brown' />
        </div>
        <p>{work}</p>
        <button className='delete' onClick={Remove}>
            <RiDeleteBin6Line size={'1.2vw'} />
        </button>
        <button className='edit' onClick={Edit}>
            <TiEdit size={'1.2vw'} />
        </button>
    </div>;
}

export default List;
