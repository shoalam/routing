import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <ul>
        <li>
          <Link to="/username">Username</Link>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
