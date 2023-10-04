import React from "react";
import { Link } from "react-router-dom";

function Tile(props) {
  return (
    <Link to={`/database/${props.dbKey}`} className="link">
      <div className="tile">
        <img src={props.image} alt={props.name} />
        <p className="tile-content">{props.name}</p>
      </div>
    </Link>
  );
}

export default Tile;
