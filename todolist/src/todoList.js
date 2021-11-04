import React, {useState} from "react";
import TodoForm from "./todo-form";
import Todo from "./todo";
const TodoList = ()=>{
    const [todos, setTodos] = useState([])
///^\s*$.text(todo.text)
    const addToDo = (todo)=>{
        console.log(todo)
        if(!todo.text){return}
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }

const updateTodo = (todoId, newValue)=>{
    if(!newValue.text){return}
    // prev??
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
}

const removeTodo = (id)=>{
    const newArr = [...todos].filter(todo => todo.id !== id)

    setTodos(newArr)
}



const completeTodo = (id)=>{
        let updateTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updateTodos)
}
    return(
        <div>
            <h1>What is the plan for today?</h1>
            <TodoForm onSubmit={addToDo}/>
            <Todo 
            todos={todos}
            completeTodo = {completeTodo}
            removeTodo = {removeTodo}
            updateTodo = {updateTodo}
            />
        </div>
    )
}

export default TodoList