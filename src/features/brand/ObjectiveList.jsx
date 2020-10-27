import React from "react";
import { Link } from "react-router-dom";

export default function ObjectiveList({ objectiveName, brandName }) {
  return (
    <div>
      <li>
        <Link to={`${brandName}/${objectiveName}`}>{objectiveName}</Link>
      </li>
    </div>
  );
}
