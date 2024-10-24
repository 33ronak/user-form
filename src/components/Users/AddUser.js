import React from "react";

const AddUser = () => {

    const addUserHandler = (event) => {
        event.preventDefault();    
    }

    return (
        <div>
            <form>
                <div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text"></input>
                    </div>
                    <div>
                        <label htmlFor="age">Age</label>
                        <input id="age" type="number"></input>
                    </div>
                    <div>
                        <button type="submit" onSubmit={addUserHandler}>Add User</button>
                    </div>
                </div>
            </form>
        </div>
    )

}

export default AddUser;