import React, { useState } from "react";
import ComparedPost from "./comparedpost/ComparedPost";
import styles from "./Comparative.module.css";

export default function Comparative() {
  //this is the space on page for the post, not the post itself
  const [comparedPosts, setComparedPosts] = useState([]);

  const clickHandler = () => {
    setComparedPosts([...comparedPosts, "Post nuevo"]);
  };

  return (
    <>
      {comparedPosts.length === 0 ? (
        <>
          <span>Agregar post</span>
          <button
            onClick={() => clickHandler([...comparedPosts, "Post nuevo"])}
          >
            +
          </button>
        </>
      ) : (
        <>
          <div className={styles.comparedPosts}>
            {comparedPosts.map((post) => (
              <ComparedPost />
            ))}
          </div>
          <button
            onClick={() => clickHandler([...comparedPosts, "Post nuevo"])}
          >
            +
          </button>
        </>
      )}
    </>
  );
}
