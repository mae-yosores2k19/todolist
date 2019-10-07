import React from "react";

export default (props) => {
    return(
        <div>
            <span>{props.number+1}.{props.value}</span>
            
            <button onClick={props.editTodo}>Edit</button>
            <button onClick={props.deleteTodo}>Delete</button>
        </div>
    )

}
