import React from "react";
import { useSelector } from "react-redux";
import '../sass/components/_UserProfile.scss';

function User () {
    const firstname = useSelector((state) => state.auth.user.firstname);
    const lastname = useSelector((state) => state.auth.user.lastname);
    
    return (
        <div className="header">
            <h2>Welcome back 
                <br />
                {firstname} {lastname} !
            </h2>
            <button className="edit-button">Edit Name</button>
        </div>
    )
}

export default User