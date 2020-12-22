import React, { useEffect, useState } from "react";
import ComparedPost from "./comparedpost/ComparedPost";
import styles from "./Comparative.module.css";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export default function Comparative() {
  const dispatch = useDispatch();
  const { clickedPost } = useParams();

  //this is the space on page for the post, not the post itself
  const [comparedPosts, setComparedPosts] = useState([]);

  const clickHandler = () => {
    setComparedPosts([...comparedPosts, "Post nuevo"]);
  };

  useEffect(() => {
    if (clickedPost && comparedPosts.length === 0) {
      setComparedPosts([...comparedPosts, "Post nuevo"]);
    }
  }, [dispatch]);

  return (
    <>
      {/* {comparedPosts.length === 0 ? (
        <>
          <span>Agregar post</span>
          <button onClick={() => clickHandler()}>+</button>
        </>
      ) : (
        <>
          <div className={styles.comparedPosts}>
            {clickedPost && <ComparedPost clickedPost={clickedPost} />}
            {comparedPosts.map(() => (
              <ComparedPost />
            ))}
          </div>
          <button onClick={() => clickHandler()}>+</button>
        </>
      )} */}
      <div class="app-main__outer">
        <div class="app-main__inner">
          <div class="app-page-title">
            <div class="page-title-wrapper">
              <div class="page-title-heading">
                <div>Benchmarks</div>
              </div>
            </div>
          </div>
          <div id="add-post">
            <button onClick={() => clickHandler()} id="add-post-button">
              <span>+</span>
            </button>
          </div>
          <div class="row">
            <div class="row">
              {clickedPost && <ComparedPost clickedPost={clickedPost} />}
              {comparedPosts.map(() => (
                <ComparedPost />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
