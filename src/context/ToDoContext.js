import { createContext } from "react";
import { useState } from "react";

export const ToDoContext = createContext({})





export const ToDoContextProvider =({children}) => {
    const [value,setValue] = useState()
    const [toDo,setToDo] = useState({
        items:[
            {id:1,name:'go to the cinema', status:true},
            {id:2,name:'walk with friends', status:true},
            {id:3,name:'help mom', status:true},
            {id:4,name:'go to school', status:true},
        ],
        visible: true
    }) 

    const handleAdd = () => {
        setToDo({
            ...toDo,    
            items:[
                ...toDo.items,
                {id:toDo.items.length + 1,name:value,status:true}
            ]
        })

    }
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const removeToDo = (deleteItems) => {
        const updateTodo = toDo.items.map((item) => {
            if(deleteItems.id == item.id){
              return {
                ...item,
                status: !item.status
              }
            }
            return item
        })
        setToDo(prev => ({
            ...prev,
            items: updateTodo
         }))
    }
    return (
        <ToDoContext.Provider value={{
            items:toDo.items,
            visible:toDo.visible,
            handleAdd,
            removeToDo

        }}>
            {children}
            <input onChange={handleChange} type='text'></input>
            <button onClick={handleAdd}>Add</button>
        </ToDoContext.Provider>
    )
}