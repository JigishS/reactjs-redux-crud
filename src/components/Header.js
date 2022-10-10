import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui seondary pointine menu">
      <Link to="/" className="item">
        All Blogs
      </Link>
    </div>
  );
};

export default Header;
