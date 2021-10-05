import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <ul>
        <li>
          <Link>Profile</Link>
        </li>
        <li>
          <Link>Username</Link>
        </li>
        <li>
          <Link>Repositories</Link>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
