import React from 'react'
import { useContext } from 'react'

import { ToDoContext } from '../../context/ToDoContext'


const ToDoItem = () => {
    const {items,visible,handleAdd,removeToDo} = useContext(ToDoContext)
    const handleDelete = (e) => {
        if(e.target.checked){
            let i = 0
            for(i;i<items.length;i++){
                if(items[i].id == e.target.id){
                    removeToDo(items[i])
                }
            }
        }
    }
   return (
    visible && (
        <ul>
            {items.map((item) => (
                item.status && (
                    <div>
                        <li key={item.id}>{item.name}</li>
                        <input id={item.id} type='checkbox' onChange={handleDelete}></input>
                    </div>
                )
            ))}
        </ul>
    )
  )
}

export default ToDoItem
