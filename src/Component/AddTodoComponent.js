import React from "react";

export default props => {
  return (
    <div>
      <center>
        <div class="ui raised card">
          <div
            class="content"
            style={{
              background:
                "linear-gradient(rgba(255,255,255,0.5),rgba(10,255,10,0.5)) , url(" +
                "https://store-images.s-microsoft.com/image/apps.3651.65918762044360660.03e0530a-dbfb-4c94-91c4-98740979e8c4.fb85cc9f-49c2-4f92-9d13-640b8811ee5e?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF) "
            }}
          >
            <input type="text" value={props.value} onChange={props.onChange} />
            {!!props.isEdit ? (
              <button onClick={props.editTodo}>Edit</button>
            ) : (
              <button onClick={props.addTodo}>Add</button>
            )}
          </div>
        </div>
      </center>
    </div>
  );
};
