import React, {useState} from 'react'
import TodoForm from './todo-form'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'


function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value:''
    })
    const submitUpdate = value => {
        updateTodo(edit.id, value)
        //setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
        setEdit({
            id: null,
            value: ''
        })
    }

    if(edit.id){
        return <TodoForm edit={edit} onSubmit = {submitUpdate} />
    }

    //const completeTodo = (id)=>{
//         let updateTodos = todos.map(todo => {
//             if(todo.id === id){
//                 todo.isComplete = !todo.isComplete
//             }
//             return todo
//         })
//         setTodos(updateTodos)
// }

    return todos.map((todo, index)=>(
        <div className={todo.isComplete ? 'todo.row complete':'todo-row'} key={index}>
            <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine 
                onClick={()=> removeTodo(todo.id)}
                className="delete-icon"
                />
                <TiEdit 
                onClick = {()=> setEdit({id: todo.id, value: todo.text})}
                className="edit-icon"
                />
            </div>
        </div>
    ))
}

export default Todo
