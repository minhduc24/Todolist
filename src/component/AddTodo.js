import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { useState } from "react/cjs/react.development";


const AddTodo = props => {

    const addTodo = props.addTodoFunc;
    const [title, setTitle] = useState('');
    
    const addTodoFormStyle = {
        display: 'flex',
    }

    const addTodoInputStyle = {
        flex: '1',
        padding: '5px'
    }

    const changeTitle = event => {
        setTitle(event.target.value);
    }

    const addSingleTodo = event => {
        event.preventDefault()
        if (title !== '') {
            addTodo(title);
            setTitle('');
        }
    }

    return (
        <Fragment>
        <form style={addTodoFormStyle} onSubmit={addSingleTodo}>
            <input onChange={changeTitle} style={addTodoInputStyle} value={title} type="text" name="title" placeholder="more things to do"/>
            <input type="submit" value="Add work" className='btn'/>
        </form>
        </Fragment>
    )
}

AddTodo.protoTypes = {
    addTodoFunc: PropTypes.func.isRequired
}

export default AddTodo