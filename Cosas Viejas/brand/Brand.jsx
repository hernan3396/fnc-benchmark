import React from "react";
import ObjectiveList from "./ObjectiveList";
import { objectives } from "../../app/constants";

export default function Objective({ match }) {
  const brandName = match.params.brandName;

  return (
    <div>
      <ul>
        {objectives.map((objective) => (
          <ObjectiveList
            key={objective.id}
            objectiveName={objective.name}
            brandName={brandName}
          />
        ))}
      </ul>
    </div>
  );
}
