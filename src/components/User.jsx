import React, { useState } from "react";
import { useSelector } from "react-redux";
import '../sass/components/_UserProfile.scss';

function User () {
    const firstname = useSelector((state) => state.auth.user.firstname);
    const lastname = useSelector((state) => state.auth.user.lastname);
    const username = useSelector((state) => state.auth.user.username);
    const [display, setDisplay] = useState(true);
    const [editUsername, setEditUsername] = useState('');
    
    return (
        <div className="header">
            { display ? 
                <div>
                    <h2>Welcome back 
                        <br />
                        {firstname} {lastname} !
                    </h2>
                    <button className="edit-button" onClick={() => setDisplay(!display)}>Edit Name</button>
                </div>
                :
                <div>
                    <h2>Edit user info</h2>
                    <form>
                        <div className="edit-input">
                            <label htmlFor="username">User name:</label>
                            <input
                                type="text"
                                id="username"
                                defaultValue={username} 
                                onChange={(event) => setEditUsername(event.target.value)}
                            />
                        </div>
                        <div className="edit-input">
                            <label htmlFor="firstname">First name:</label>
                            <input
                                type="text"
                                id="firstname" 
                                defaultValue={firstname}
                                disabled={true}
                            />
                        </div>
                        <div className="edit-input">
                            <label htmlFor="lastname">Last name:</label>
                            <input
                                type="text"
                                id="lastname" 
                                defaultValue={lastname}
                                disabled={true}
                            />
                        </div>
                        <div className="buttons">
                            <button className="edit-username-button">Save</button>
                            <button className="edit-username-button" onClick={() => setDisplay(!display)}>Cancel</button>
                        </div>
                    </form>
                </div>
            }
        </div>
    )
}

export default User