import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Navigation = () => {
  return (
    <div className="ui secondary pointing menu">
      <div className="item">
        <Link to={ROUTES.LANDING}>Home</Link>
      </div>
      <div className="item">
        <Link to={ROUTES.SEARCH}>Search</Link>
      </div>
      <div className="right menu">
        <div className="item">
          <Link to={ROUTES.LOGIN}>LOGIN</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;