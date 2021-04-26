import React from "react";
import "./MovieItem.css";

type itemProps = {
  title: string;
  image: string;
  rating: number;
};

const MovieItem = ({ title, image, rating }: itemProps) => {
  return (
    <div className="item_wrapper">
      <img src={image} className="item_poster" />
      <div className="description">
        <div className="title">{title}</div>
        <div className="rating">{rating}</div>
      </div>
    </div>
  );
};

export default MovieItem;
