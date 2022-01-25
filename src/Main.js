import React from 'react'
import Add from './Components/Add';
import CurrentTask from './Components/CurrentTask';
import './main.css'

function Main() {
    return <div className="background">
        <div className="header">

            <div className="todolist">
                <h1>TO-DO LIST</h1>
            </div>
            <Add />
        </div>

        <div className='main'>

            <div className="working">
                <CurrentTask />
            </div>


        </div>
    </div>
}

export default Main;

