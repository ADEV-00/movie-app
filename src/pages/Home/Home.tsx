import React from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import "./Home.css";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="header">
          <button className="header_btn-active">Movies</button>
          <button className="header_btn">TV Shows</button>
        </div>
        <SearchInput type={"Movies"} />
      </div>
    </div>
  );
};

export default Home;
