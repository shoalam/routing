import React from "react";
import { Link } from "react-router-dom";

const Marketplace = () => {
  return (
    <div>
      <h1>Marketplace</h1>
      <ul>
        <li>
          <Link to="/cliarguments">Cli-arguments</Link>
        </li>
      </ul>
    </div>
  );
};

export default Marketplace;
