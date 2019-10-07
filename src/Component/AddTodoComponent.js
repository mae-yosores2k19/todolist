import React from 'react'



export default (props)=>{
    return(
        <div>
            <input type = "text" value={props.value}onChange={props.onChange}/>
            {!!props.isEdit ? <button onClick = {props.editTodo}>Edit</button> : <button onClick = {props.addTodo}>Add</button>}
        </div>
    );
}