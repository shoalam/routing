import React from "react";
import { Link } from "react-router-dom";

const Username = () => {
  return (
    <div>
      <ul>
        <li>
          <Link>Profile</Link>
        </li>
        <li>
          <Link>Username</Link>
        </li>
      </ul>
    </div>
  );
};

export default Username;
