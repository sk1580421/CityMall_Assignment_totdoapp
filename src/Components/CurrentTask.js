import React from 'react';
import './css_files/currenttask.css'
import List from './List';
import { useStateValue } from '../StateProvider';


const CurrentTask = () => {

    const [{ isEditing, store }, dispatch] = useStateValue();
    console.log(store)

    return <div>
        <div className="heading">
            <h2>Current Task</h2>
        </div>
        <div>

            {store.map(task => (

                <List work={task.work} id={task.id} />

            ))}
        </div>
    </div>;
}

export default CurrentTask;
