import React from "react";
import "./AddUser.css"
import Card from "../UI/Card";

const AddUser = () => {

    const addUserHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <Card className = "input">
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
            </Card>
        </div>
    )

}

export default AddUser;