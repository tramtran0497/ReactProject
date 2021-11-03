import React, {useState, useEffect, useRef} from "react";

const TodoForm = (props)=>{
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (e)=>{
        setInput(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        props.onSubmit({
            id: Math.floor(Math.random()*1000),
            text: input
        })
        setInput('')
    }
    return(
        <form className='todoForm' onSubmit={handleSubmit}>
        {props.edit ? ( 
        <div>
        <input type="text" placeholder="Update your item " value={input} name='text' className = 'todo-input edit' onChange={handleChange} ref={inputRef} />
        <button className="todo-btn edit">Update todo</button>
        </div>) : 
        (
        <div>
        <input type="text" placeholder="Add a todo " value={input} name='text' className = 'todo-input' onChange={handleChange} ref={inputRef} />
        <button className="todo-btn">Add todo</button>
        </div>
      
        )}
              
        </form>
    )
}

export default TodoForm