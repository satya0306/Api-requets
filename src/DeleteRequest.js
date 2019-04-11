import React from 'react';

const DeleteRequest = ({submit,change}) =>{
    return (
        <div>
          <form onSubmit={submit}>
            <label>
              Person ID:
              <input type="text" name="id" onChange={change} />
            </label>
            <button type="submit">Delete</button>
          </form>
        </div>
      )
}

export default DeleteRequest;