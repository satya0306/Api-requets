import React from 'react';

const PostRequest = ({submit,change}) =>{
    return(
    <div>
        <form onSubmit={submit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={change}/>
          </label>
          <button type="submit">Add</button>
        </form>
    </div>
        /*after submiting the form see the console */
    );

}

export default PostRequest;