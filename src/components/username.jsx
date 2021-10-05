import React from "react";
import { Link } from "react-router-dom";

const Username = () => {
  return (
    <div>
      <h1>Username</h1>
      <ul>
        <li>
          <Link to="/repositories">Repositories</Link>
        </li>
      </ul>
    </div>
  );
};

export default Username;
