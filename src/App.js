import React, {Fragment} from 'react'
import './App.css';
import Header from './component/Header';
import Todo from './component/Todo';



const App = () => {
    return (
    <Fragment>
    <Header />
    <Todo />
    </Fragment>
    )
}

export default App;